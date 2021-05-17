<template>
  <field-renderer
    :fieldName="fieldName"
    :fieldSchema="fieldSchema"
    @click="handleClick"
    renderWidgetKey="Preview"
    :class="{ 'preview-field-active': actived, 'form-item': true }"
  ></field-renderer>
</template>
<script lang="tsx">
import { computed, defineComponent, PropType } from "@vue/runtime-core";
import FieldRenderer from "../../renderer/components/field-renderer";
import { state } from "../../store";
import { IWidgetConfig } from "../../widgets/type";
export default defineComponent({
  props: {
    fieldSchema: {
      type: Object as PropType<IWidgetConfig>,
      require: true,
    },
    fieldName: String,
  },
  setup(props) {
    const actived = computed(() => {
      return props.fieldName === state.designer.selectFieldName;
    });

    return { actived };
  },
  components: {
    FieldRenderer,
  },
  methods: {
    handleClick(event: UIEvent) {
      event.stopPropagation();
      state.designer.selectFieldName = this.fieldName!;
    },
  },
});
</script>

<style lang="less" scoped>
.form-item {
  margin-bottom: 0;
  background-color: white;

  :deep(input),
  :deep(textarea) {
    cursor: pointer;
    pointer-events: none;
    resize: none;
  }
}
</style>
