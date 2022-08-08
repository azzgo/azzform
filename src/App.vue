<script lang="tsx">
import Vue from "vue";
import { ISchema } from "./generators";
import { cloneDeep, get } from "lodash";
import { parseSchema } from "./generators";
import { Field, FormProvider } from "@formily/vue";
import { createForm } from "@formily/core";

let editor: any;

export default Vue.extend({
  name: "App",
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
      form: createForm({ validateFirst: true }),
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
  computed: {
    fields() {
      return parseSchema(this.schema);
    },
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
  // eslint-disable-next-line
  render(h) {
    return (
      <div id="app">
        <div class="flex-1">
          <div class="flex">
            <input class="flex-1" name="path" v-model={this.path} />
            <button onClick={this.updateScheme}>更新 PATH</button>
            <FormProvider form={this.form}>
              <Field name="hello" />
            </FormProvider>
          </div>
        </div>
        <div class="flex-1" id="json-viewer"></div>
      </div>
    );
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
