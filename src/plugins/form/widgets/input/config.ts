import { defineWidget } from "../utils";

const widgetName = "input";

export default defineWidget({
  text: "单行文本",
  category: "basic",
  schema: {
    title: "单行文本",
    type: "string",
    widget: widgetName,
    column: 24,
    placeholder: "",
    maxLength: 200,
    minLength: 0,
  },
});
