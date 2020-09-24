import { getFieldColumn, getFieldProps, getFieldWidget } from "../utils/getField";

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
    type: fieldSchema.type,
    widget: getFieldWidget(fieldSchema),
    title: fieldSchema.title,
    column: getFieldColumn(fieldSchema),
    children: schemaParse(fieldSchema),
    props: getFieldProps(fieldSchema)
  };
  return fieldObj;
}
