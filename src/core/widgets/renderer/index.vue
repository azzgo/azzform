<script>
import { widgets } from "../index";
import { schemaParse } from "./parser";
import FieldRenderer from "./field-renderer.vue";

export default {
  name: "form-renderer",
  props: {
    schema: Object,
  },
  components: {
    ...widgets,
    [FieldRenderer.name]: FieldRenderer,
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