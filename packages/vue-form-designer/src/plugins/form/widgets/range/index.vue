<script>
import ui from "../../contants/ui";
import config from "./config";

export default {
  name: config.schema[ui.widget],
  emits: ['change'],
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
        disabled={this.readOnly}
        value={this.value || 0}
        onChange={(val) => this.$emit("change", val)}
      />
    );
  },
};
</script>
