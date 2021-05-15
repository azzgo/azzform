import { defineWidget } from "../utils";

const widgetName = "container";

export default defineWidget({
  text: "容器",
  category: 'advance',
  schema: {
    title: "容器",
    type: "string",
    widget: widgetName,
    column: 24,
  },
});

