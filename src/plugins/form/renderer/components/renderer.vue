<script lang="tsx">
import { widgetsRenderDefaultMapping } from "../../widgets";
import { parseSchemaIntoFields } from "../../utils/parser";
import FieldRenderer from "./field-renderer.vue";
import { resolveFormData } from "../../utils/resolve";
import { computed, defineComponent, PropType, provide } from "@vue/runtime-core";
import { WIDGETS_MAPPING } from "../../contants/provideNames";
import { IWidgetSchema } from "../../widgets/type";
import { IField } from '../type'

export default defineComponent({
  name: "form-renderer",
  emits: ["change", "update:formData"],
  props: {
    schema: {
      type: Object as PropType<IWidgetSchema>,
      default: () => ({}),
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
    widgetsMapping: {
      type: Object,
      default: () => widgetsRenderDefaultMapping,
    },
  },
  mounted() {
    this.$emit("update:formData", this.computedFormData);
  },
  setup(props) {

    const fields = computed(()  => parseSchemaIntoFields(props.schema))
    const computedFormData  = computed(() => resolveFormData(props.schema, props.formData))

    provide(WIDGETS_MAPPING, props.widgetsMapping)

    return {
      fields,
      computedFormData,
    }
  },
  components: {
    [FieldRenderer.name]: FieldRenderer,
  },
  methods: {
    handleFormChange(val: any) {
      this.$emit("update:formData", val);
    },
  },
  render() {
    return (
      <a-form layout="vertical">
        {this.fields?.map((field: IField) => {
          return (
            <field-renderer
              key={field.fieldName}
              fieldSchema={field.fieldSchema}
              value={this.computedFormData[field.fieldName]}
              onChange={(val: any) =>
                this.handleFormChange({
                  ...this.computedFormData,
                  [field.fieldName]: val,
                })
              }
            />
          );
        })}
      </a-form>
    );
  },
});
</script>
