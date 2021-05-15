// 去掉无法 JSON 化的部分
export function jsonClone(schema: Record<string, any>) {
  return JSON.parse(JSON.stringify(schema));
}


export function checkIsWidget(schema: Record<string, any>): boolean {
  return schema.widget != null
}

