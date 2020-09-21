import ui from "@/plugins/renderer/contants/ui";
import { getFieldColumn, getFieldWidget } from "@/plugins/renderer/utils/getField";

export function schemaParse(schema) {
  if (schema.type === "object" && schema.properties) {
    return Object.keys(schema.properties).map((propName) => {
      const propValue = schema.properties[propName] || {};

      return fieldParse(propName, propValue);
    });
  }

  return [];
}

export function fieldParse(id, fieldSchema) {
  let fieldObj = {
    fieldId: id,
    widget: getFieldWidget(fieldSchema),
    title: fieldSchema.title,
    column: getFieldColumn(fieldSchema),
    props: {
      ...(fieldSchema[ui.options] || {}),
    },
    children: schemaParse(fieldSchema),
  };
  return fieldObj;
}
