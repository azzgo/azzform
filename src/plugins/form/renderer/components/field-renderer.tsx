import { defineComponent, inject, PropType } from "@vue/runtime-core";
import {
  IDesignerWidgetValueConfig,
  IRenderWidgetValueConfig,
  widgetsRenderDefaultMapping,
} from "../../widgets";
import { IWidgetSchema } from "../../widgets/type";
import { WIDGETS_MAPPING } from "../../contants/provideNames";
import "../styles/field-renderer.css";

export default defineComponent({
  name: "field-renderer",
  props: {
    fieldSchema: { type: Object as PropType<IWidgetSchema>, require: true },
    readOnly: Boolean,
    value: { default: null },
    renderWidgetKey: {
      type: String as PropType<"Widget" | "Preview">,
      default: "Widget",
    },
  },
  emits: ["change"],
  setup() {
    const widgetsMapping = inject(
      WIDGETS_MAPPING,
      widgetsRenderDefaultMapping
    ) as Record<string, IRenderWidgetValueConfig | IDesignerWidgetValueConfig>;

    return {
      widgetsMapping,
    };
  },
  render() {
    const Field: any = (this.widgetsMapping[
      this.fieldSchema!.widget as string
    ] as IDesignerWidgetValueConfig)[this.renderWidgetKey];
    if (!Field) {
      return (
        <a-col span={24} class="col-item">
          Oh Oh the Widget render went wrong~
        </a-col>
      );
    }
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
