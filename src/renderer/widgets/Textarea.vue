<template>
  <div>
    <label>{{ title }}</label>
    <textarea :rows="5"></textarea>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TextWidget",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
