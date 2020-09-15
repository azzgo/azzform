<template>
  <div>
    <edit-header />
    <div class="main-sesion">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import EditHeader from "./components/Header.vue";

export default {
  components: {
    EditHeader
  }
};
</script>