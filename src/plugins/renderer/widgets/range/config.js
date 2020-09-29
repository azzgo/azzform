import ui from "@/plugins/renderer/contants/ui";

export default {
  name: "range",
  text: "滑动输入条",
  schema: {
    title: "滑动输入条",
    type: "number",
    [ui.widget]: "c-slider",
    [ui.col]: 24,
    [ui.options]: {
      step: 1,
    },
    default: 200,
    minimum: 0,
    maximum: 200,
  },
};
