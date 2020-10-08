import ui from "../../renderer/contants/ui";

export default {
  name: "table",
  text: "表格",
  schema: {
    title: "单行文本",
    type: "array",
    [ui.widget]: "c-table",
    [ui.col]: 24,
    [ui.options]: {
      pagination: "false",
      columns: [],
    },
    items: {
      type: 'object',
      properties: {},
    }
  },
};
