<template>
  <div>
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
import { parseObjectSchemaIntoFileds } from "./paster";
import { ISchema } from "./type";
import FieldRender from "./FieldRender.vue";

export default Vue.extend({
  name: "FormRenderer",
  components: {
    FieldRender,
  },
  props: {
    schema: {
      type: Object as PropType<ISchema>,
      default: () => ({}),
    },
    formData: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  computed: {
    fields() {
      return parseObjectSchemaIntoFileds(this.schema);
    },
  },
});
</script>

<style scoped></style>
