import { defineComponent } from "vue";
import { IField, ISchema } from "./type";
import { getWidget } from "./utils";
import { Field } from "@formily/vue";

/**
 * @param schema: 需要解析的 Schema, 需要符合 JSON Schema 规范
 * @param name: 可选，当 Schema 是简单 Scheme 时（type 非 object & arrray），name 字段会促使生成 Field 配置
 **/
export function parseSchema<T extends ISchema = ISchema>(
  schema: T,
  name?: string
): IField[] | IField {
  if (schema?.type === "object" && typeof schema.properties === "object") {
    return Object.keys(schema.properties).map((propName) => {
      const curSchema: T = schema.properties[propName] as unknown as T;
      return {
        name: propName,
        schema: curSchema,
        Widget: getWidget(curSchema),
      };
    });
  }

  const Widget = getWidget(schema);

  if (name) {
    return {
      name,
      schema,
      Widget: defineComponent({
        render(h) {
          return h(Field, { props: { component: [Widget] } });
        },
      }) as unknown,
    } as IField;
  }

  return {
    schema,
    Widget,
  } as IField;
}
