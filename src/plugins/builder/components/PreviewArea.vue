<template>
  <draggable
    v-model="draggableFields"
    class="prewview"
    group="viewcomps"
    tag="a-form"
  >
    <draggable-form-item
      v-for="field in draggableFields"
      :schema="field.schema"
      :key="field.id"
      :id="field.id"
      :actived="selectFieldId === field.id"
      @click="setActiveId(field.id)"
    ></draggable-form-item>
  </draggable>
</template>

<script>
import { schemaParse } from "@/plugins/renderer/parser";
import draggable from "vuedraggable";
import DraggableFormItem from "./DraggableFormItem.vue";
import { fromPairs } from "lodash-es";

export default {
  name: "PreviewArea",
  props: {
    schema: Object,
  },
  model: {
    prop: "schema",
    event: "schema-change",
  },
  data() {
    return {
      selectFieldId: "",
    };
  },
  computed: {
    draggableFields: {
      get() {
        return schemaParse(this.schema);
      },
      set(value) {
        return this.$emit("schemaChange", {
          type: "object",
          properties: fromPairs(value.map((field) => [field.id, field.schema])),
        });
      },
    },
  },
  methods: {
    setActiveId(fieldID) {
      this.selectFieldId = fieldID;
      this.$emit("selectFieldChange", fieldID);
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
  cursor: pointer;
  border: 1px transparent solid;
}
</style>

<style lang="less">
.prewview {
  .tool-item {
    width: 100%;
  }

  .sortable-ghost {
    border: 1px red dashed !important;
    min-height: 40px;

    .item {
      display: none;
    }
  }
}
</style>