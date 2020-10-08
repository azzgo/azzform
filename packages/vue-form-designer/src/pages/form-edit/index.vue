<template>
  <form-builder @goback="goback" />
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router  =  useRouter()
    return {
      goback() {
        router.back();
      },
    };
  },
};
</script>>
