import { defineComponent } from "vue";
import { IField, ISchema } from "./type";
import { getWidget } from "./utils";
import { Field } from "@formily/vue";
import { nanoid } from "nanoid";

/**
 * @param schema: 需要解析的 Schema, 需要符合 JSON Schema 规范
 * @param name: 可选，当 Schema 是简单 Scheme 时（type 非 object & arrray），name 字段会促使生成 Field 配置
 **/
export function parseSchema<T extends ISchema = ISchema>(
  schema: T,
  path: Array<string | number> = []
): IField[] | IField {
  if (schema?.type === "object" && typeof schema.properties === "object") {
    return Object.keys(schema.properties)
      .map((propName) => {
        const curSchema: T = schema.properties[propName] as unknown as T;

        // 需要判断 widget 字段，防止 type[object] 存在对应组件的情况
        if (
          curSchema?.type === "object" &&
          typeof curSchema.properties === "object" &&
          !curSchema.widget
        ) {
          return parseSchema(curSchema, path.concat([propName]));
        }

        const Widget = getWidget(curSchema);
        return {
          name: getNamePattern(propName, path),
          schema: curSchema,
          Widget: defineComponent({
            name: Widget && Widget.name + "_" + propName,
            render(h) {
              return h(Field, { props: { component: [Widget] } });
            },
          }),
        };
      })
      .flat() as unknown as IField[];
  }

  const Widget = getWidget(schema);

  if (schema.type === "void") {
    return {
      schema,
      Widget,
    } as IField;
  }

  const name = getNamePattern(nanoid(10), path);

  return {
    name,
    schema,
    Widget: defineComponent({
      name: Widget.name + "_" + name,
      render(h) {
        return h(Field, { props: { component: [Widget] } });
      },
    }) as unknown,
  } as IField;
}

function getNamePattern(
  name: string,
  path: Array<string | number>
): string | Array<string | number> {
  if (path.length === 0) {
    return name;
  }

  return path.concat([name]);
}
