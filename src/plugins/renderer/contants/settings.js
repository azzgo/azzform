import ui from "./ui";
import InputConfig from "../widgets/input/config";
import SliderConfig from '../widgets/range/config'

export const commonSettings = {
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "标题",
      [ui.widget]: InputConfig.schema[ui.widget],
    },
    'ui:column': {
      type: "number",
      title: "栅格",
      default: 24,
      minimum: 1,
      maximum: 24,
      [ui.widget]: SliderConfig.schema[ui.widget],
      [ui.options]: {
        step: 1,
      },
    },
  },
};
