# azzform-renderer

## 功能

将一个 object 的 json schema 直出表单

期望效果： API 中的 Swagger JSON 定义的 DTO 来直出对应提交表单

## 不足

1. 难以覆盖跨字段的逻辑关键（比如关联校验，关联显隐），需要通过在 JSON Schema 基础上附着 DSL 元信息来控制
2. 难以控制字段对应表单元素分组等富有变化的 UI 布局，因为 JSON Schema 是基于数据格式的描述
