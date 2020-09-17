export const commonSettings = {
  $id: {
    title: "ID",
    description: "数据存储的名称，请写英文，不能为空",
    type: "string",
    "ui:widget": "idInput",
  },
  title: {
    title: "标题",
    type: "string",
  },
  description: {
    title: "说明",
    type: "string",
  },
  "ui:width": {
    title: "元素宽度",
    type: "string",
    "ui:widget": "percentSlider",
  },
  "ui:labelWidth": {
    title: "标签宽度",
    description: "默认值4",
    type: "number",
    "ui:widget": "slider",
    max: 24,
    "ui:options": {
      hideNumber: true,
    },
  },
  default: {
    title: "默认值",
    type: "string",
  },
  "ui:readonly": {
    title: "置灰",
    type: "boolean",
  },
};
