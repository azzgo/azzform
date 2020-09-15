<template>
  <draggable :list="forms" class="prewview" group="viewcomps">
    <draggable-form-item
      v-for="form in draggableForms"
      :rule="form.rule"
      :key="form.id"
      :actived="activeFieldId === form.id"
      @click="setActiveId(form.id)"
    ></draggable-form-item>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import DraggableFormItem from "./DraggableFormItem.vue";

export default {
  name: "PreviewArea",
  data() {
    return {
      forms: [],
      activeFieldId: ""
    };
  },
  computed: {
    draggableForms() {
      return this.forms.map(form => {
        return {
          id: form.id,
          rule: {
            ...form.defaultRule
          }
        };
      });
    }
  },
  methods: {
    setActiveId(fieldID) {
      this.activeFieldId = fieldID;
    }
  },
  components: {
    draggable,
    DraggableFormItem
  }
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