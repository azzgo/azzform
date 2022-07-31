<template>
  <div>
    <label>{{ title }}</label>
    <input type="datetime" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputDatetimeWidget",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
