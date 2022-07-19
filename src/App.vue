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
import ls from "./ls";

const defaultSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "姓名",
    },
    basic: {
      type: "object",
      title: "基本信息",
      properties: {
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
    },
    address: {
      type: "object",
      title: "地址",
      properties: {
        address1: {
          type: "string",
          title: "主要地址",
        },
        address2: {
          type: "string",
          title: "次要地址",
        },
      },
    },
  },
} as ISchema;

const SchemaKey = "schema";

export default Vue.extend({
  name: "App",
  components: {
    FormRender,
  },
  data() {
    return { schema: ls.get(SchemaKey, defaultSchema) };
  },
  mounted() {
    const editor: any = new (window as any).JSONEditor(
      document.getElementById("json-viewer"),
      {
        mode: "text",
        onChangeText: (text: any) => {
          try {
            ls.set(SchemaKey, JSON.parse(text));
            this.schema = ls.get(SchemaKey);
            // eslint-disable-next-line
          } catch (e) {}
        },
      }
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
