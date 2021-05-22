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
import { WIDGETS_MAPPING } from "../../contants/provideNames";
import { IWidgetSchema } from "../../widgets/type";
import { IField } from "../type";

export default defineComponent({
  name: "form-renderer",
  emits: ["submit"],
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
  setup(props) {
    const fields = computed(() => parseSchemaIntoFields(props.schema));
    const computedFormData = computed(() =>
      resolveFormData(props.schema, props.formData)
    );

    provide(WIDGETS_MAPPING, props.widgetsMapping);

    return {
      fields,
      computedFormData,
    };
  },
  render() {
    return (
      <a-form layout="vertical">
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
