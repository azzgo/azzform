<template>
  <draggable :list="forms" class="prewview" group="viewcomps">
    <form-create v-model="fApi" :rule="formRules" :option="formOptions"></form-create>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "PreviewArea",
  data() {
    return {
      fApi: {},
      formRules: [
        {
          type: "input",
          field: "goods_name",
          title: "商品名称"
        }
      ],
      formOptions: { submitBtn: false, resetBtn: false },
      forms: []
    };
  },
  components: { draggable }
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