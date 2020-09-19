import ui from "@/core/contants/ui";
import { getFieldColumn, getFieldWidget } from "@/core/utils/getField";

export function schemaParse(schema) {
  if (schema.type === "object" && schema.properties) {
    return Object.keys(schema.properties).map((propName) => {
      const propValue = schema.properties[propName] || {};

      return fieldParse(propName, propValue);
    });
  }

  return null;
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
