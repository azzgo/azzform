<script>
import ui from "@/core/contants/ui";
import config from "./config";

export default {
  name: config.schema[ui.widget],
  props: {
    placeholder: String,
    allowClear: Boolean,
    readOnly: Boolean,
  },
  render() {
    return (
      <a-input placeholder={this.placeholder} allowClear={this.allowClear} readOnly={this.readOnly} />
    );
  },
};
</script>