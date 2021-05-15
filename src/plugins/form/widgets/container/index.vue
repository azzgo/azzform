<script lang="tsx">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "container",
  components: {},
  props: {
    name: String,
  },
  render() {
    return <div>组件 容器</div>;
  },
});
</script>
