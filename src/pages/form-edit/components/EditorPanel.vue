<template>
  <div class="editor-panel">
    <a-tabs :animated="false">
      <a-tab-pane :key="tabKeys.fieldProperties" :tab="tabKeys.fieldProperties">
        <div class="tab-panel">
          <div v-if="activedField">
            <a-form-item label="标题">
              <a-input v-model="activedField.schema.title" />
            </a-form-item>
            <div v-if="activedField.schema['ui:options']">
              <a-form-item
                label="提示"
                v-if="activedField.schema['ui:options']['placeholder'] != null"
              >
                <a-textarea v-model="activedField.schema['ui:options']['placeholder']" />
              </a-form-item>
            </div>
          </div>
          <div v-else>请选择一个表单元素</div>
        </div>
      </a-tab-pane>
      <a-tab-pane :key="tabKeys.formProperties" :tab="tabKeys.formProperties">
        <div class="tab-panel">
          <span></span>
        </div>
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
  props: {
    activedField: null,
  },
  data() {
    return {
      tabKeys: TAB_KEYS,
    };
  },
  computed: {
    settingSchema() {
      // this.$store.state.
      return 1
    }
  },
  components: {},
};
</script>

<style lang="less" scoped>
.editor-panel {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  border-left: 1px solid #ccc;
}

.tab-panel {
  padding: 10px 15px;
}
</style>