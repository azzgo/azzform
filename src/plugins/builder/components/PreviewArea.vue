<template>
  <draggable
    v-model="draggableFields"
    class="prewview"
    group="viewcomps"
    tag="a-form"
  >
    <draggable-form-item
      v-for="field in draggableFields"
      :fieldSchema="field.schema"
      :key="field.fieldId"
      :id="field.fieldId"
      :actived="selectFieldId === field.fieldId"
      @click="setActiveId(field.fieldId)"
    ></draggable-form-item>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import DraggableFormItem from "./DraggableFormItem.vue";
import { fromPairs } from "lodash-es";
import { state } from "../store";

export default {
  name: "PreviewArea",
  props: {
    schema: Object,
  },
  data() {
    return {
      selectFieldId: "",
    };
  },
  computed: {
    draggableFields: {
      get() {
        // 需要拆分下
        return Object.keys(state.schema?.properties || []).map((propName) => {
          const propValue = state.schema.properties[propName] || {};

          return {
            fieldId: propName,
            schema: propValue,
          };
        });
      },
      set(value) {
        state.schema = {
          type: "object",
          properties: fromPairs(
            value.map((field) => [field.fieldId, field.schema])
          ),
        };
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