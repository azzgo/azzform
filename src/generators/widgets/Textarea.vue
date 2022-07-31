<template>
  <div>
    <label>{{ title }}</label>
    <textarea :rows="5"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextWidget",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
