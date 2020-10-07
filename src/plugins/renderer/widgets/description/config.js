import ui from "@/plugins/renderer/contants/ui";
import InputConfig from "../input/config";

export default {
  name: "description",
  text: "描述",
  schema: {
    title: "描述",
    type: "string",
    [ui.widget]: "c-description",
    [ui.col]: 24,
    [ui.options]: {
      placeholder: "这是一段无用的描述",
    },
  },
  setting: {
    [ui.options]: {
      type: "object",
      title: "组件选项",
      properties: {
        placeholder: {
          type: "string",
          title: "提示",
          [ui.widget]: InputConfig.schema[ui.widget],
        },
      },
    },
  },
};
