<template>
  <div id="app">
    <div class="flex-1">
      <div class="flex">
        <input class="flex-1" name="path" v-model="path" />
        <button @click="updateScheme">更新 PATH</button>
      </div>
      <hr />
      <div>Form Render Section</div>
    </div>
    <div class="flex-1" id="json-viewer"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ISchema } from "./renderer";
import ls from "./ls";
import swaggerJSON from "./swagger.json";
import { get } from "lodash";

const SchemaKey = "schema";

let editor: any;

export default Vue.extend({
  name: "App",
  components: {
    // FormRender,
  },
  data() {
    const jsonPath = "definitions.ApplicationDTO";

    return {
      path: jsonPath,
      schema: get(ls.get(SchemaKey, swaggerJSON), jsonPath) as ISchema,
    };
  },
  mounted() {
    editor = new (window as any).JSONEditor(
      document.getElementById("json-viewer"),
      {
        mode: "view",
      }
    );
    editor.set(this.schema);
  },
  watch: {
    schema(val: ISchema) {
      editor.set(val);
    },
  },
  methods: {
    updateScheme() {
      if (!this.path || this.path?.trim()?.length === 0) {
        this.schema = ls.get(SchemaKey, swaggerJSON);
        return;
      }
      this.schema = get(ls.get(SchemaKey, swaggerJSON), this.path) as ISchema;
    },
  },
});
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}
</style>
