import { widgetsRenderDefaultMapping } from "../../widgets";
import { parseSchemaIntoFields } from "../../utils/parser";
import FieldRenderer from "./field-renderer";
import { resolveFormData } from "../../utils/resolve";
import {
  computed,
  defineComponent,
  PropType,
  provide,
} from "@vue/runtime-core";
import { WIDGETS_MAPPING, FORM_DATA } from "../../contants/provideNames";
import { IWidgetSchema } from "../../widgets/type";
import { IField } from "../type";

export default defineComponent({
  name: "form-renderer",
  emits: ["update:formData"],
  props: {
    schema: {
      type: Object as PropType<IWidgetSchema>,
      default: () => ({}),
    },
    formData: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
    widgetsMapping: {
      type: Object,
      default: () => widgetsRenderDefaultMapping,
    },
  },
  setup(props, context) {
    const fields = computed(() => parseSchemaIntoFields(props.schema));
    const computedFormData = computed({
      get() {
        return resolveFormData(props.schema, props.formData);
      },
      set(val: unknown) {
        context.emit("update:formData", val);
      },
    });

    provide(WIDGETS_MAPPING, props.widgetsMapping);
    provide(FORM_DATA, computedFormData);


    return {
      fields,
      computedFormData,
    };
  },
  render() {
    return (
      <a-form model={this.computedFormData} layout="vertical">
        {this.fields?.map((field: IField) => {
          return (
            <FieldRenderer
              key={field.fieldName}
              fieldName={field.fieldName}
              fieldSchema={field.fieldSchema}
            />
          );
        })}
      </a-form>
    );
  },
});
