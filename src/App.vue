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
import { cloneDeep, get } from "lodash";

let editor: any;

export default Vue.extend({
  name: "App",
  components: {
    // FormRender,
  },
  props: {
    swaggerJSON: {
      type: Object,
      required: true,
    },
  },
  data() {
    const jsonPath = "paths./applications/bulk-audit.post.parameters.0.schema";

    return {
      path: jsonPath,
      schema: get(cloneDeep(this.swaggerJSON), jsonPath) as ISchema,
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
        this.schema = cloneDeep(this.swaggerJSON);
        return;
      }
      this.schema = get(cloneDeep(this.swaggerJSON), this.path) as ISchema;
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
