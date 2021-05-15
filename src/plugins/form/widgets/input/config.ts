import { IWidgetConfig } from "../type";

const widgetName = "c-input";

export default {
  name: "input",
  text: "单行文本",
  schema: {
    title: "单行文本",
    type: "string",
    widget: widgetName,
    column: 24,
    placeholder: "",
    maxLength: 200,
    minLength: 0,
  },
} as IWidgetConfig<{
  placeholder: string;
  maxLength: number;
  minLength: number;
}>;
