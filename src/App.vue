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
import defaultSwaggerJSON from "./swagger.json";
import { get } from "lodash";

const SchemaKey = "schema";

export default Vue.extend({
  name: "App",
  components: {
    // FormRender,
  },
  data() {
    const jsonPath = "definitions.ApplicationDTO";

    return {
      path: jsonPath,
      schema: get(ls.get(SchemaKey, defaultSwaggerJSON), jsonPath) as ISchema,
    };
  },
  mounted() {
    const editor = new (window as any).JSONEditor(
      document.getElementById("json-viewer"),
      {
        mode: "tree",
        onChangeText: (text: any) => {
          try {
            ls.set(SchemaKey, JSON.parse(text));
            // eslint-disable-next-line
          } catch (e) {}
        },
      }
    );
    editor.set(ls.get(SchemaKey, defaultSwaggerJSON));
  },
  methods: {
    updateScheme() {
      if (!this.path || this.path?.trim()?.length === 0) {
        this.schema = ls.get(SchemaKey, defaultSwaggerJSON);
        return;
      }
      this.schema = get(
        ls.get(SchemaKey, defaultSwaggerJSON),
        this.path
      ) as ISchema;
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
