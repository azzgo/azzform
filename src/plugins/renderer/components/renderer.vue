<script>
import { widgets } from "../widgets";
import { schemaParse } from "../utils/parser";
import FieldRenderer from "./field-renderer.vue";
import { Form, Modal } from "ant-design-vue";
import { resolveFormData } from "../utils/resolve";

export default {
  name: "form-renderer",
  model: {
    prop: "formData",
    event: "onChange",
  },
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    formData: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.$emit("onChange", this._formData);
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
    ["a-form"]: Form,
    ["a-modal"]: Modal,
  },
  render() {
    return (
      <a-form layout="vertical">
        {this.fields.map((field) => {
          return <field-renderer field={field} />;
        })}
      </a-form>
    );
  },
};
</script>