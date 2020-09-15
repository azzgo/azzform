export const basicComps = [
  {
    name: "描述",
    defaultRule: {
      type: "description",
      title: "描述",
      field: "description", // 后续随机生成，存储相关
      placeholder: "这是一段可疑的描述",
      col: {
        span: 24
      },
    },
  },
  {
    name: "单行文本",
    defaultRule: {
      type: "input",
      title: "单行文本",
      field: "input", // 后续随机生成，存储相关
      col: {
        span: 24
      },
    },
  },
  {
    name: "多行文本",
    defaultRule: {
      type: "textarea",
      title: "多行文本",
      field: "textarea", // 后续随机生成，存储相关
      props: {},
      col: {
        span: 24
      },
    },
  },
  {
    name: "日期时间",
    defaultRule: {
      type: "datetime",
      title: "日期时间",
      field: "datetime", // 后续随机生成，存储相关
      props: {},
      placeholder: "",
      col: {
        span: 24
      },
    },
  },
  {
    name: "数字",
    defaultRule: {
      type: "number",
      title: "数字",
      field: "number", // 后续随机生成，存储相关
      props: {},
      col: {
        span: 24
      },
    },
  },
  {
    name: "单选按扭组",
    defaultRule: {
      type: "radio",
      title: "单选按扭组",
      field: "radio", // 后续随机生成，存储相关
      props: {},
      value: "",
      col: {
        span: 24
      },
    },
  },
];

export const advancedComps = [];
