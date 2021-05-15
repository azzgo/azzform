<script lang="tsx">
import { defineComponent, inject, PropType } from "@vue/runtime-core";
import { widgetsRenderDefaultMapping } from "../../widgets";
import { IWidgetSchema } from "../../widgets/type";
import { WIDGETS_MAPPING } from "../../contants/provideNames";

export default defineComponent({
  name: "field-renderer",
  props: {
    fieldSchema: { type: Object as PropType<IWidgetSchema>, require: true },
    readOnly: Boolean,
    value: { default: null },
  },
  emits: ["change"],
  setup() {
    const widgetsMapping = inject(WIDGETS_MAPPING, widgetsRenderDefaultMapping);

    return {
      widgetsMapping,
    };
  },
  render() {
    const Field: any = this.widgetsMapping[this.fieldSchema!.widget as string].Widget;
    return (
      <a-col span={this.fieldSchema?.column || 24} class="col-item">
        <a-form-item label={this.fieldSchema?.title}>
          <Field
            {...this.fieldSchema}
            value={this.value}
            onChange={(val: any) => this.$emit("change", val)}
          />
        </a-form-item>
      </a-col>
    );
  },
});
</script>

<style scoped>
.col-item {
  padding: 5px 10px;
  box-sizing: border-box;
}
</style>
