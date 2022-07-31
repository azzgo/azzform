<template>
  <div>
    <label>{{ title }}</label>
    <input type="number" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberWidget",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
