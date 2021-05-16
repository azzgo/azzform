<template>
  <div>组件容器</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "container",
  components: {},
  props: {
    name: String,
  },
});
</script>
