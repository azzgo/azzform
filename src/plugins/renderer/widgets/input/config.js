import ui from "@/plugins/renderer/contants/ui";

const widgetName = 'c-input'

export default {
  name: "input",
  text: "单行文本",
  schema: {
    title: "单行文本",
    type: "string",
    [ui.widget]: widgetName,
    [ui.col]: 24,
    [ui.options]: {
      placeholder: "",
      allowClear: false,
      readOnly: false,
    },
    maxLength: 200,
    minLength: 0,
  },
  setting: {
    [ui.options]: {
      type: 'object',
      title: '组件选项',
      properties: {
        placeholder: {
          type: 'string',
          title: '提示',
          [ui.widget]: widgetName,
        }
      }
    }
  }
};
