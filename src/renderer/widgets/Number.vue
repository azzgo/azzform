<template>
  <div>
    <label>{{ title }}</label>
    <input type="number" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "NumberWidget",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
