<template>
  <a-input
    :value="value"
    :placeholder="placeholder"
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
