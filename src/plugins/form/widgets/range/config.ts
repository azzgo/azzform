import {IWidgetConfig} from "../type";

export default {
  name: "range",
  text: "滑动输入条",
  schema: {
    title: "滑动输入条",
    type: "number",
    widget: "c-slider",
    column: 24,
    step: 1,
    default: 200,
    minimum: 0,
    maximum: 200,
  },
} as IWidgetConfig<{step: number, minimum: number,  maximum:  number}>;
