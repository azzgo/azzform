<script>
import ui from "../../contants/ui";
import config from "./config";
import { Slider } from "ant-design-vue";

export default {
  name: config.schema[ui.widget],
  props: {
    minimum: Number,
    maximum: Number,
    step: {
      type: Number,
      default: 1,
    },
    readOnly: Boolean,
  },
  render() {
    return (
      <Slider
        min={this.minimum}
        max={this.maximum}
        step={this.step}
        disabled={this.readOnly}
      />
    );
  },
};
</script>