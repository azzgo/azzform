import { IWidgetConfig } from "../type";

export default {
  name: "description",
  text: "描述",
  schema: {
    title: "描述",
    type: "string",
    placeholder: "这是一段无用的描述",
    widget: "c-description",
    column: 24,
  },
} as IWidgetConfig<{ placeholder: string }>;
