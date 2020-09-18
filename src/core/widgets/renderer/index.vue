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
    const fileds = schemaParse(this.schema);
    return h(
      "a-form",
      {
        props: {
          layout: "vertical",
        },
      },
      fileds.map((filed) => {
        return h("a-form-item", {
          props: { filed },
        });
      })
    );
  },
};
</script>