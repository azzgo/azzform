<template>
  <draggable :list="forms" class="prewview" group="viewcomps">
    <div class="form-item" v-for="formItem in forms" :key="formItem.id">{{formItem.name}}</div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "PreviewArea",
  data() {
    return {
      forms: [],
    };
  },
  components: { draggable },
};
</script>

<style lang="less" scoped>
.prewview {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  background-color: white;
  overflow-y: auto;
}

.form-item {
  padding: 5px 10px;
  cursor: pointer;
}
</style>

<style lang="less">
.prewview {
  .sortable-ghost {
    border: 1px red dashed !important;
    width: 100%;
    min-height: 40px;

    .item {
      display: none;
    }
  }
}
</style>