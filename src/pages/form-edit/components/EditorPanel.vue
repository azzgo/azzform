<template>
  <div class="editor-panel">
    <a-tabs :animated="false">
      <a-tab-pane :key="tabKeys.fieldProperties" :tab="tabKeys.fieldProperties">
        <span>form</span>
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
  formProperties: "表单数性",
};

export default {
  data() {
    return {
      tabKeys: TAB_KEYS,
    };
  },
  components: {
  },
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