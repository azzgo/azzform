<template>
  <div id="app">
    <div class="flex-1">
      <FormRender :schema="schema" />
    </div>
    <div class="flex-1" id="json-viewer"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { FormRender, ISchema } from "./renderer";

export default Vue.extend({
  name: "App",
  components: {
    FormRender,
  },
  data() {
    return {
      schema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "姓名",
          },
          age: {
            type: "number",
            title: "年龄",
          },
          brief: {
            type: "string",
            widget: "text",
            title: "简介",
          },
        },
      } as ISchema,
    };
  },
  mounted() {
    const editor: any = new (window as any).JSONEditor(
      document.getElementById("json-viewer"),
      { mode: "text" }
    );
    editor.set(this.schema);
  },
});
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.flex-1 {
  flex: 1;
}
</style>
