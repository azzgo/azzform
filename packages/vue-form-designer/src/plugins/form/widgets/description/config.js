import ui from "../../contants/ui";

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
};
