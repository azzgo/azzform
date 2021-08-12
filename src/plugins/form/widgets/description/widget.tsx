import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'c-description',
  props: {
    placeholder: String,
  },
  emits: ["change"],
  render() {
    return <div>{this.placeholder}</div>;
  },
});
