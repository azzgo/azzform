<template>
  <draggable
    v-model="draggableFields"
    class="prewview"
    tag="a-form"
    :component-data="{props: {layout: 'vertical'}}"
    group="viewcomps"
  >
    <draggable-form-item
      v-for="field in draggableFields"
      :schema="field.schema"
      :key="field.id"
      :id="field.id"
      :actived="activeFieldId === field.id"
      @click="setActiveId(field.id)"
    ></draggable-form-item>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import DraggableFormItem from "./DraggableFormItem.vue";
import { COMMIT_TYPE } from "../../../store";

export default {
  name: "PreviewArea",
  data() {
    return {
      activeFieldId: "",
    };
  },
  computed: {
    draggableFields: {
      get() {
        return this.$store.state.draggableFields;
      },
      set(value) {
        return this.$store.commit(COMMIT_TYPE.draggableFields_update, value);
      },
    },
  },
  methods: {
    setActiveId(fieldID) {
      this.activeFieldId = fieldID;
      this.$emit(
        "selectActivedField",
        this.draggableFields.find((field) => field.id === fieldID)
      );
    },
  },
  components: {
    draggable,
    DraggableFormItem,
  },
};
</script>

<style lang="less" scoped>
.prewview {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  background-color: white;
  overflow-y: auto;
  padding: 10px 15px;
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