import { jsonClone } from "./common";

export function resolveDefaultValue(schema) {
  const defaultMapping = {
    object: {},
    array: [],
    string: "",
    number: "",
    null: null,
    integer: "",
    boolean: false,
  };

  if (typeof schema.default !== "undefined") {
    return schema.default;
  }

  // array且enum的情况，为多选框，默认值[]
  if (schema.type === "array" && Array.isArray(schema.enum)) {
    return [];
  }

  if (Array.isArray(schema.enum) && schema.enum.length > 0) {
    return schema.enum[0];
  }

  return defaultMapping[schema.type];
}

/**
 * @description 解析合并最新的 formData
 */
export function resolveFormData(schema, formData) {
  let _data =
    formData == null ? resolveDefaultValue(schema) : jsonClone(formData);

  if (schema.type === "object" && typeof schema.properties === "object") {
    Object.entries(schema.properties).forEach(([key, value]) => {
      // 如过有值，那么就跳过默认值赋值
      if (_data[key] != null) {
        return;
      }

      // 为对应属性赋值
      _data[key] = resolveDefaultValue(value);
    });
  }

  // 如果是数组类型，并且存在 item 属性时，需要按需解析其默认值
  if (schema.type === "array" && schema.items) {
    let subs = [].concat(schema.items || []);
    let ret = [];
    _data.forEach &&
      _data.forEach((item, idx) => {
        ret[idx] = resolveFormData(subs[idx] || subs[0], item);
      });
    return ret;
  }

  return _data;
}
