// 判断schema的值是是否是“函数”
// JSON无法使用函数值的参数，所以使用"{{...}}"来标记为函数
export function isFunction(func) {
  if (typeof func === "function") {
    return true;
  }

  if (
    typeof func === "string" &&
    func.substring(0, 2) === "{{" &&
    func.substring(func.length - 2, func.length) === "}}"
  ) {
    return func.substring(2, func.length - 2);
  }
  return false;
}

// 去掉无法 JSON 化的部分
export function jsonClone(schema) {
  return JSON.parse(JSON.stringify(schema));
}
