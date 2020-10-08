<script>
import { Tabs } from "ant-design-vue";
import Setting from "@/plugins/renderer/widgets/description/setting.vue";

const TAB_KEYS = {
  fieldProperties: "字段属性",
  formProperties: "表单数性",
};

export default {
  props: {
    activedField: Object,
  },
  data() {
    return {};
  },
  methods: {
    handleSettingFormDataChange(val) {
      this.$emit("settingChange", val);
    },
  },
  render() {
    return (
      <div class="edit-panel">
        <Tabs animated={false}>
          <Tabs.TabPane
            key={TAB_KEYS.fieldProperties}
            tab={TAB_KEYS.fieldProperties}
          >
            <div class="tab-panel">
              {this.activedField ? <Setting formData={this.activedField} onFormDataChange={this.handleSettingFormDataChange} /> : <div />}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            key={TAB_KEYS.formProperties}
            tab={TAB_KEYS.formProperties}
          >
            <div class="tab-panel">
              <span></span>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
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