export const basicComps = [
  {
    name: "描述",
    defaultRule: {
      type: "f-description",
      title: "描述",
      field: "description", // 后续随机生成，存储相关
      value: "这是一段可疑的描述",
      col: 24,
    },
  },
  {
    name: "单行文本",
    defaultRule: {
      type: "a-input",
      title: "单行文本",
      field: "input", // 后续随机生成，存储相关
      value: "",
      col: 24,
    },
  },
  {
    name: "多行文本",
    defaultRule: {
      type: "f-textarea",
      title: "多行文本",
      field: "textarea", // 后续随机生成，存储相关
      props: {},
      value: "",
      col: 24,
    },
  },
  {
    name: "日期时间",
    defaultRule: {
      type: "f-datetime",
      title: "日期时间",
      field: "datetime", // 后续随机生成，存储相关
      props: {},
      value: "",
      col: 24,
    },
  },
  {
    name: "数字",
    defaultRule: {
      type: "f-number",
      title: "数字",
      field: "number", // 后续随机生成，存储相关
      props: {},
      value: "",
      col: 24,
    },
  },
  {
    name: "单选按扭组",
    defaultRule: {
      type: "f-radio",
      title: "单选按扭组",
      field: "radio", // 后续随机生成，存储相关
      props: {},
      value: "",
      col: 24,
    },
  },
];

export const advancedComps = [];
