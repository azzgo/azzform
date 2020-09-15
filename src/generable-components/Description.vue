<template>
  <div>{{placeholder}}</div>
</template>

<script>

import config from '../contants/config'
export default {
  name: `${config.editComponentPrefix}description`,
  props: {
    placeholder: String
  }
};
</script>