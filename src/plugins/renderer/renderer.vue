<script>
import { widgets } from "./widgets";
import { schemaParse } from "./parser";
import FieldRenderer from "./field-renderer.vue";
import { Form, Modal } from 'ant-design-vue'

export default {
  name: "form-renderer",
  props: {
    schema: Object,
  },
  components: {
    ...widgets,
    [FieldRenderer.name]: FieldRenderer,
    ['a-form']: Form,
    ['a-modal']: Modal,
  },
  render(h) {
    const fields = schemaParse(this.schema);
    return h(
      "a-form",
      {
        props: {
          layout: "vertical",
        },
      },
      fields.map((field) => {
        return h("field-renderer", {
          props: { field },
        });
      })
    );
  },
};
</script>