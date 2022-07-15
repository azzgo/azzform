<script lang="ts">
import Vue, { PropType } from "vue";
import { ISchema } from "./type";
import { getWidget } from "./utils";

export default Vue.extend({
  name: "FieldRenderer",
  props: {
    name: {
      type: String,
      required: true,
    },
    schema: {
      type: Object as PropType<ISchema>,
      required: true,
    },
  },
  render(h) {
    const Widget = getWidget(this.schema);

    if (!Widget) {
      return;
    }

    return h(Widget, { props: this.schema });
  },
});
</script>
