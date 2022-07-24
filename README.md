# Swagger 2 Form

## 功能

- 通过 Swagger json 获取 api 调用方法
- 通过 Swagger 的 某个 DTO 生成 Vue 组件引用，可用于通用 Render

## 约定

- 简单 Schema: type 非 object 和 array 的 JSONSchema 对象

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
  - [ ] 对 简单 type[non array & object] 解析 -> Field + config | Widget + config
    - [X] 处理 type -> Widget 的映射场景
    - [ ] 处理 type, name -> Field 的映射场景
    - [ ] 处理 type + format 通用处理逻辑
    - [ ] 处理 type + enum 场景
  - [ ] 对 type[object] 打散 Field + config 项数据
  - [ ] 处理 type[array] 场景通用处理
    - [ ] 处理 type[array] + enum + 多选场景处理
  - [ ] 处理 简单 type[custom] 场景的组件渲染逻辑
  - [ ] 处理 type[object|array custom] 非通用场景的处理逻辑
  - [ ] 处理 type[ignore] 场景的处理逻辑
- [ ] 尝试返回不同的表单组件
- [ ] 尝试渲染

## NEXT

- [ ] 组件间的联动方案
  - [ ] 校验联动
  - [ ] 显隐联动
  - [ ] 数据联动
- [ ] 数据映射
