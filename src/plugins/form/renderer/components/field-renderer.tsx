import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  PropType,
} from "@vue/runtime-core";
import {
  IDesignerWidgetValueConfig,
  IRenderWidgetValueConfig,
  widgetsRenderDefaultMapping,
} from "../../widgets";
import { IWidgetSchema } from "../../widgets/type";
import {
  WIDGETS_MAPPING,
  FORM_DATA,
  INDEXED_FIELD_DATA_PATH,
} from "../../contants/provideNames";
import "../styles/field-renderer.css";
import { get, set } from "lodash";

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
      const widgetConfig = widgetsMapping[
        props.fieldSchema!.widget
      ] as IDesignerWidgetValueConfig;
      return widgetConfig[props.renderWidgetKey];
    });

    const indexedFieldSchemaPath = inject(
      INDEXED_FIELD_DATA_PATH,
      {}
    ) as ComputedRef<Record<string, string>>;

    const formData = inject(FORM_DATA, {}) as ComputedRef<
      Record<string, unknown>
    >;

    const fieldValue = computed({
      get() {
        const fieldPath = indexedFieldSchemaPath.value[props.fieldName!];
        return get(formData.value, fieldPath);
      },
      set(val: unknown) {
        const fieldPath = indexedFieldSchemaPath.value[props.fieldName!];
        return set(formData.value, fieldPath, val);
      },
    });

    return {
      Field,
      fieldValue,
    };
  },
  render() {
    // issue at https://github.com/vuejs/vue-next/issues/3224
    const Field = this.Field as Newable;
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
            value={this.fieldValue}
            onChange={(val: unknown) => {
              this.fieldValue = val;
            }}
          />
        </a-form-item>
      </a-col>
    );
  },
});
