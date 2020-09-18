import ui from "@/core/contants/ui";

export default {
  name: "input",
  text: "单行文本",
  schema: {
    title: "单行文本",
    type: "string",
    [ui.widget]: "c-input",
    [ui.col]: 24,
    [ui.options]: {
      placeholder: "",
      allowClear: false,
      readOnly: false,
    },
    maxLength: 200,
    minLength: 0,
  },
};
