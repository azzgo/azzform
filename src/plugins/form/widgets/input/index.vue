<template>
  <a-input
    value="{this.value}"
    placeholder="{this.placeholder}"
    @change="handleOnChange"
  />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "c-input",
  props: {
    placeholder: String,
    value: null,
  },
  emits: ["change"],
  methods: {
    handleOnChange(event: ChangeEvent) {
      this.$emit("change", event.target.value);
    },
  },
});
</script>
