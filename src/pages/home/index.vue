<template>
  <a-row type="flex" justify="center">
    <h1>
      <router-link to="form-edit/2">表单设计器</router-link>
    </h1>
  </a-row>
</template>

<script>
import { Row } from 'ant-design-vue'

export default {
  name: "home",
  components: {
    ['a-row']: Row
  }
};
</script>