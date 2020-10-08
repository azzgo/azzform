<template>
  <draggable
    v-model="draggableFields"
    class="prewview"
    group="viewcomps"
    tag="a-form"
    item-key="fieldId"
    :component-data="{ layout: 'vertical' }"
  >
    <template #item="{ element }">
      <draggable-form-item
        :fieldSchema="element.schema"
        :id="element.fieldId"
        :actived="itemActived(element.fieldId)"
        @click="setActiveId(element.fieldId)"
      />
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import DraggableFormItem from "./DraggableFormItem.vue";
import { fromPairs } from "lodash-es";
import { state } from "../../store";

export default {
  name: "EditorPreviewArea",
  props: {
    schema: Object,
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
    itemActived(fieldId) {
      return state.designer.selectFieldId === fieldId;
    },
    setActiveId(fieldID) {
      state.designer.selectFieldId = fieldID;
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
  .sortable-ghost {
    border: 1px red dashed !important;
    width: 100% !important;
    max-width: none;
    min-height: 40px;

    .item {
      display: none;
    }
  }
}
</style>
