<template>
  <textarea :rows="5"></textarea>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "TextWidget",
  props: {},
});
</script>
