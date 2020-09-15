<template>
  <div class="editor-panel">
    <a-tabs :animated="false">
      <a-tab-pane :key="tabKeys.fieldProperties" :tab="tabKeys.fieldProperties">
        <div v-if="activedField">
          <a-form-item label="标题">
            <a-input v-model="activedField.rule.title" />
          </a-form-item>
          <a-form-item label="提示" v-if="activedField.rule.placeholder != null">
            <a-textarea v-model="activedField.rule.placeholder" />
          </a-form-item>
        </div>
        <div v-else>请选择一个表单元素</div>
      </a-tab-pane>
      <a-tab-pane :key="tabKeys.formProperties" :tab="tabKeys.formProperties">
        <span></span>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
const TAB_KEYS = {
  fieldProperties: "字段属性",
  formProperties: "表单数性"
};

export default {
  props: {
    activedField: null,
  },
  data() {
    return {
      tabKeys: TAB_KEYS
    };
  },
  components: {}
};
</script>

<style lang="less" scoped>
.editor-panel {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  border-left: 1px solid #ccc;
}
</style>