<script>
import { widgets } from "../../widgets";
import { schemaParse } from "../utils/parser";
import FieldRenderer from "./field-renderer.vue";
import { resolveFormData } from "../utils/resolve";

export default {
  name: "form-renderer",
  emits: ['change', 'update:formData'],
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.$emit("formDataChange", this._formData);
  },
  computed: {
    fields() {
      return schemaParse(this.schema);
    },
    _formData() {
      return resolveFormData(this.schema, this.formData);
    },
  },
  components: {
    ...widgets,
    [FieldRenderer.name]: FieldRenderer,
  },
  methods: {
    handleFormChange(val) {
      this.$emit("update:formData", val);
    },
  },
  render() {
    return (
      <a-form layout="vertical">
        {this.fields.map((field) => {
          return (
            <field-renderer
              key={field.fieldId}
              field={field}
              value={this._formData[field.fieldId]}
              onChange={(val) =>
                this.handleFormChange({
                  ...this._formData,
                  [field.fieldId]: val,
                })
              }
            />
          );
        })}
      </a-form>
    );
  },
};
</script>
