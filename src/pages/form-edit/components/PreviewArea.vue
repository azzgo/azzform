<template>
  <draggable :list="forms" class="prewview" @add="onAdd" group="viewcomps">
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
  methods: {
    onAdd(evt) {
      console.log(evt);
      return evt;
    },
  },
  components: { draggable },
};
</script>

<style lang="less" scoped>
.prewview {
  height: 100%;
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
    height: 40px;

    .item {
      display: none;
    }
  }
}
</style>