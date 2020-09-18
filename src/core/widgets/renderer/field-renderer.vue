<script>
import { widgets } from "..";
export default {
  name: "field-renderer",
  props: {
    field: Object,
    readOnly: Boolean,
  },
  components: {
    ...widgets,
  },
  render(h) {
    return h(
      "a-form-item",
      {
        props: {
          label: this.field.title,
        },
        style: {
          width: this.field.width,
        },
      },
      [
        h(
          this.field.widget,
          { props: { ...this.field.props, readOnly: this.readOnly } },
          this.field.children
        ),
      ]
    );
  },
};
</script>