<template>
  <div>
    <edit-header />
    <div class="main-sesion">
      <form-designer />
    </div>
  </div>
</template>

<script>
import EditHeader from "./components/Header.vue";
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