<template>
  <FormDesigner @goback="goback" />
</template>

<script>
import { useRouter } from "vue-router";
import { FormDesigner } from "@/plugins/form";
export default {
  components: {
    FormDesigner,
  },
  setup() {
    const router = useRouter();
    return {
      goback() {
        router.back();
      },
    };
  },
};
</script>

