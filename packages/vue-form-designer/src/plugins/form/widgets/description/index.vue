<script>
import ui from "../../contants/ui";
import config from "./config";
export default {
  name: config.schema[ui.widget],
  props: {
    placeholder: String,
  },
  emits: ['change'],
  render() {
    return <div>{this.placeholder}</div>;
  },
};
</script>
