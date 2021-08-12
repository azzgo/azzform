import { defineWidget } from "../utils";

export default defineWidget<{
  step: number;
  minimum: number;
  maximum: number;
}>({
  text: "滑动输入条",
  category: "basic",
  schema: {
    title: "滑动输入条",
    type: "number",
    widget: "slider",
    column: 24,
    step: 1,
    default: 200,
    minimum: 0,
    maximum: 200,
  },
});
