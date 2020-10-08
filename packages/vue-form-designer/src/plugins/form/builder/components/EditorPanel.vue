<script>
import { widgetSettingMap } from "../../widgets";
import ui from "../../contants/ui";


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
    const Setting = widgetSettingMap[this.activedField?.[ui.widget]];

    return (
      <div class={this.$style["editor-panel"]}>
        <div class={this.$style["tab-panel"]}>
          {this.activedField ? (
            <Setting
              formData={this.activedField}
              onFormDataChange={this.handleSettingFormDataChange}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  },
};
</script>

<style module>
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
