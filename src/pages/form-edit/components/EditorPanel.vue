<template>
  <div class="editor-panel">
    <tabs :animated="false">
      <tab-pane :key="tabKeys.fieldProperties" :tab="tabKeys.fieldProperties">
        <span>form</span>
      </tab-pane>
      <tab-pane :key="tabKeys.formProperties" :tab="tabKeys.formProperties">
        <span>form2</span>
      </tab-pane>
    </tabs>
  </div>
</template>
<script>
import { Tabs } from "ant-design-vue";

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
    Tabs,
    TabPane: Tabs.TabPane,
  },
};
</script>

<style lang="less" scoped>
.editor-panel {
  height: 100%;
  border-left: 1px solid #ccc;
}
</style>