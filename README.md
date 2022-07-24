# Swagger 2 Form

## 功能

- 通过 Swagger json 获取 api 调用方法
- 通过 Swagger 的 某个 DTO 生成 Vue 组件引用，可用于通用 Render

## TODO

- [X] 安装 依赖准备
  - [X] lodash + @types
  - [X] ajv 不确定是否有用
  - [X] formily
  - [X] vue composition-api
  - [X] swagger-js 解析 swagger.json
- [X] 找个测试用的 swagger.json
- [X] 实现 swaggerJson 中读取对应 JSON Schema 的能力
- [ ] 解析 JSONSchema
- [ ] 尝试返回不同的表单组件
- [ ] 尝试渲染
