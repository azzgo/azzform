const { resolveFormData } = require("../resolve");

test("解析 Schema 和 formData 数据，补齐表单数据默认值", () => {
  const schema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        default: "张三",
      },
      gender: {
        type: "string",
        enum: ["男", "女"],
      },
      age: {
        type: "number",
        default: 18,
      },
    },
  };

  const formData = {
    name: "李四",
  };

  const expectedFormData = {
    name: "李四",
    gender: "男",
    age: 18,
  };
  expect(resolveFormData(schema, formData)).toEqual(expectedFormData);
});
