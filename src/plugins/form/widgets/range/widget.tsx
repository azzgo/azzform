import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'c-range',
  emits: ["change"],
  props: {
    minimum: Number,
    maximum: Number,
    step: {
      type: Number,
      default: 1,
    },
    readOnly: Boolean,
    value: {
      type: Number,
      default: 0,
    },
  },
  render() {
    return (
      <a-slider
        min={this.minimum}
        max={this.maximum}
        step={this.step}
        value={this.value || 0}
        onChange={(val: number) => this.$emit("change", val)}
      />
    );
  },
});
