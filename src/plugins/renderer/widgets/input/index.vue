<script>
import ui from "../../contants/ui";
import config from "./config";

import { Input } from "ant-design-vue";

export default {
  name: config.schema[ui.widget],
  props: {
    placeholder: String,
    allowClear: Boolean,
    readOnly: Boolean,
    value: null,
  },
  components: {
    ["a-input"]: Input,
  },
  render() {
    return (
      <a-input
        value={this.value}
        placeholder={this.placeholder}
        allowClear={this.allowClear}
        readOnly={this.readOnly}
        onChange={(event) => this.$emit("change", event.target.value)}
      />
    );
  },
};
</script>