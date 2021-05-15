import { defineWidget } from "../utils";

export default defineWidget<{ placeholder: string }>({
  text: "描述",
  category: "basic",
  schema: {
    title: "描述",
    type: "string",
    placeholder: "这是一段无用的描述",
    widget: "description",
    column: 24,
  },
});
