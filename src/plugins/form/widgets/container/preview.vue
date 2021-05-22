
<template>
  <draggable v-model="fields" group="viewcomps" item-key="fieldName">
    <template #item="{ element }">
      <draggable-form-item
        :fieldSchema="element.fieldSchema"
        :fieldName="element.fieldName"
      />
    </template>
  </draggable>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, inject, Ref } from "vue";
import { parseSchemaIntoFields } from "../../utils/parser";
import draggable from "vuedraggable";
import DraggableFormItem from "../../designer/components/DraggableFormItem.vue";
import { fromPairs, set } from "lodash";
import { IField } from "../../renderer/type";
import { INDEXED_FIELDSCHEMA_PATH, SCHEMA } from "../../contants/provideNames";
import config from './config'
import { getTargetSchemaPath } from "../../utils/common";

export default defineComponent({
  name: "container",
  inheritAttrs: false,
  components: {
    draggable,
    DraggableFormItem,
  },
  props: {
    fieldName: String,
    properties: {
      type: Object,
    },
  },
  setup(props) {
    const schema = inject(SCHEMA, {}) as Ref;
    const indexedFieldSchemaPath = inject(
      INDEXED_FIELDSCHEMA_PATH,
      {}
    ) as ComputedRef<Record<string, string>>;

    const fields = computed({
      get() {
        return parseSchemaIntoFields({ type: "object", ...props })! || [];
      },
      set(value: IField[]) {
        const newSchema = {
          ...config.schema,
          properties: fromPairs(
            value.map((field: IField) => [field.fieldName, field.fieldSchema])
          ),
        };

        const curSchemaPath = indexedFieldSchemaPath.value[props.fieldName!];
        set(schema.value, getTargetSchemaPath(curSchemaPath), newSchema);
      },
    });

    return { fields };
  },
});
</script>
