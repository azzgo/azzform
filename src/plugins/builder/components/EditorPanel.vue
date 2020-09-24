<template>
  <div class="editor-panel">
    <a-tabs :animated="false">
      <a-tab-pane :key="tabKeys.fieldProperties" :tab="tabKeys.fieldProperties">
        <div class="tab-panel">
          <div v-if="activedFieldId">
            <form-renderer
              :schema="settingSchema"
              :formData="settingFormData"
              @onChange="handleSettingFormDataChange"
            />
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
import { Tabs } from "ant-design-vue";
import Renderer from "@/plugins/renderer/components/renderer.vue";
import { commonSettings } from "@/plugins/renderer/contants/settings";

const TAB_KEYS = {
  fieldProperties: "字段属性",
  formProperties: "表单数性",
};

export default {
  props: {
    activedFieldId: null,
  },
  components: {
    ["a-tabs"]: Tabs,
    ["a-tab-pane"]: Tabs.TabPane,
    [Renderer.name]: Renderer,
  },
  data() {
    return {
      tabKeys: TAB_KEYS,
      settingSchema: commonSettings,
      settingFormData: {},
    };
  },
  methods: {
    handleSettingFormDataChange(val) {
      console.log(val);
      this.settingFormData = val;
    },
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

.tab-panel {
  padding: 10px 15px;
}
</style>