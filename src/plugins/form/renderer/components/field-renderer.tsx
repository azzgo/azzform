import { computed, defineComponent, inject, PropType } from "@vue/runtime-core";
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
    fieldName: String,
    renderWidgetKey: {
      type: String as PropType<"Widget" | "Preview">,
      default: "Widget",
    },
  },
  setup(props) {
    const widgetsMapping = inject(
      WIDGETS_MAPPING,
      widgetsRenderDefaultMapping
    ) as Record<string, IRenderWidgetValueConfig | IDesignerWidgetValueConfig>;

    const Field = computed(() => {
      const widgetConfig = widgetsMapping[props.fieldSchema!.widget] as IDesignerWidgetValueConfig
      return widgetConfig[props.renderWidgetKey];
    })
    return {
      Field,
    };
  },
  render() {
    // issue at https://github.com/vuejs/vue-next/issues/3224
    const Field = this.Field  as  Newable
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
            fieldName={this.fieldName}
            {...this.fieldSchema}
          />
        </a-form-item>
      </a-col>
    );
  },
});
