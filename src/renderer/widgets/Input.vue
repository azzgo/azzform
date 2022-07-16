<template>
  <div>
    <label>{{ title }}</label>
    <input />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InputWidget",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
