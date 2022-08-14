<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api";
import { FieldContext, fieldContextKey } from "./enum";

export default defineComponent({
  name: "azz-field",
  props: {
    name: {
      type: [String, Array],
      require: true,
    },
  },
  inject: {
    fieldContext: {
      from: fieldContextKey,
      default: () => ({}),
    },
  },
  render(h) {
    const value = this.fieldContext?.getValue(this.name);
    const onChange = (val: any) =>
      this.fieldContext?.updateValue(this.name, val);

    return h("div", null, [this.$scopedSlots.default({ onChange, value })]);
  },
});
</script>
