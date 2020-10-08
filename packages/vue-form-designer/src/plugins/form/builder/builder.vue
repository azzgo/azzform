<template>
  <div>
    <edit-header @goback="$emit('goback')" />
    <div class="main-sesion">
      <form-designer />
    </div>
  </div>
</template>

<script>
import EditHeader from "./sections/Header.vue";
import FormDesigner from "./sections/FormDesigner.vue";

export default {
  data() {
    return {};
  },
  components: {
    EditHeader,
    FormDesigner,
  },
};
</script>
