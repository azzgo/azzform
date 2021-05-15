<template>
  <draggable
    v-model="draggableFields"
    class="prewview"
    group="viewcomps"
    tag="a-form"
    item-key="fieldName"
    :component-data="{ layout: 'vertical' }"
  >
    <template #item="{ element }">
      <draggable-form-item
        :fieldSchema="element.fieldSchema"
        :fieldName="element.fieldName"
      />
    </template>
  </draggable>
</template>

<script lang="ts">
import draggable from "vuedraggable";
import DraggableFormItem from "./DraggableFormItem.vue";
import { fromPairs } from "lodash-es";
import { parseSchemaIntoFields } from "../../utils/parser";
import { computed, defineComponent, inject, Ref } from "@vue/runtime-core";
import { IField } from "../../renderer/type";
import { SCHEMA } from "../../contants/provideNames";

export default defineComponent({
  name: "preview-panel",
  setup() {
    const schema = inject(SCHEMA, {}) as Ref;

    const draggableFields = computed({
      get() {
        return parseSchemaIntoFields(schema.value) ?? [];
      },
      set(value: IField[]) {
        const newSchema = {
          type: "object",
          properties: fromPairs(
            value.map((field: IField) => [field.fieldName, field.fieldSchema])
          ),
        };

        schema.value = newSchema;
      },
    });

    return { draggableFields };
  },
  components: {
    draggable,
    DraggableFormItem,
  },
});
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
