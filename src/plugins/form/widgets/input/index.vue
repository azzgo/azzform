<script lang="tsx">
import { defineComponent } from "@vue/runtime-core";
import config from "./config";

export default defineComponent({
  name: config.schema.widget,
  props: {
    placeholder: String,
    value: null,
  },
  emits: ["change"],
  render() {
    return (
      <a-input
        value={this.value}
        placeholder={this.placeholder}
        onChange={(event: ChangeEvent) =>
          this.$emit("change", event.target.value)
        }
      />
    );
  },
});
</script>
