import ui from "./ui";
import InputConfig from "../widgets/input/config";

export const commonSettings = {
  type: "object",
  properties: {
    fieldId: {
      type: "string",
      title: "字段ID",
      [ui.widget]: InputConfig.schema[ui.widget],
    },
    title: {
      type: "string",
      title: "标题",
      [ui.widget]: InputConfig.schema[ui.widget],
    },
    default: {
      type: "string",
      title: "默认值",
      [ui.widget]: InputConfig.schema[ui.widget],
    },
    column: {
      type: "integer",
      title: "栅格",
      default: 24,
      minimum: 1,
      maximum: 24,
      [ui.widget]: InputConfig.schema[ui.widget],
      [ui.options]: {
        step: 1,
      },
    },
  },
};
