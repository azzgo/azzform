<template>
  <div>
    <label>{{ title }}</label>
    <input />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputWidget",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
