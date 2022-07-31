<template>
  <div>
    <label>{{ title }}</label>
    <select>
      <option v-for="op in options" :key="op" :value="op">{{ op }}</option>
      <option></option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingleSelect",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
