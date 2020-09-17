import ui from "@/core/contants/ui";
import { getFieldWidget } from "@/core/utils/getField";

export function parser(schema) {
  if (schema.type === "object" && schema.properties) {
    return Object.keys(schema.properties).map((propName) => {
      const propValue = schema.properties[propName] || {};

      let fieldObj = {
        fieldId: propName,
        widget: getFieldWidget(propValue),
        title: propValue.title,
        props: {
          ...(propValue[ui.options] || {}),
        },
        children: parser(propValue),
      };
      return fieldObj;
    });
  }

  return null;
}
