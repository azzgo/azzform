<script>
import { widgets } from "../index";
import { parser } from "./parser";

export default {
  name: "form-renderer",
  props: {
    schema: Object,
  },
  components: {
    ...widgets,
  },
  render(h) {
    const fileds = parser(this.schema);
    return h(
      "div",
      fileds.map((filed) => {
        return h("a-form-item", { props: { label: filed.title } }, [
          h(filed.widget, { props: filed.props }, filed.children),
        ]);
      })
    );
  },
};
</script>