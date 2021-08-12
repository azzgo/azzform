---
to: src/plugins/form/widgets/<%= name %>/widget.tsx
---
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "<%= name %>",
  components: {},
  props: {
    name: String,
  },
  render() {
    return <div>组件 <%= widgetText %></div>;
  },
});
