<script lang="tsx">

import { defineComponent } from "@vue/runtime-core";
import config from "./config";

export default defineComponent({
  name: config.schema.widget,
  props: {
    placeholder: String,
  },
  emits: ["change"],
  render() {
    return <div>{this.placeholder}</div>;
  },
});
</script>
