<template>
  <div>
    <edit-header :schema="schema" />
    <div class="main-sesion">
      <form-designer v-model="schema" />
    </div>
  </div>
</template>

<script>
import EditHeader from "./components/Header.vue";
import FormDesigner from "./sections/FormDesigner.vue";

export default {
  data() {
    return {
      schema: {},
    }
  },
  components: {
    EditHeader,
    FormDesigner,
  },
};
</script>