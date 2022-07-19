<template>
  <div>
    <h1>{{ title }}</h1>
    <hr />
    <FieldRender
      v-for="field in fields"
      :key="field.name"
      :name="field.name"
      :schema="field.schema"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { parseObjectSchemaIntoFileds } from "..";
import { ISchema } from "../type";
import FieldRender from "../FieldRender.vue";

export default Vue.extend({
  name: "ObjectWidget",
  components: {
    FieldRender,
  },
  props: {
    title: {
      type: String,
    },
    properties: {
      type: Object as PropType<Record<string, ISchema>>,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fields() {
      return parseObjectSchemaIntoFileds({
        type: "object",
        title: this.title,
        properties: this.properties,
      });
    },
  },
});
</script>
