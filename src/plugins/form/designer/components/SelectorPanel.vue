<template>
  <div class="tool-container">
    <a-card
      v-for="tool in tools"
      :key="tool.name"
      :title="tool.name"
      :bordered="false"
    >
      <draggable
        :list="tool.comps"
        :clone="cloneComp"
        :group="{ name: 'viewcomps', pull: 'clone', put: false }"
        :sort="false"
        item-key="name"
        tag="a-row"
        :component-data="{ gutter: [10, 15] }"
      >
        <template #item="{ element }">
          <a-col class="tool-item" :span="12">
            <span class="item">{{ element.text }}</span>
          </a-col>
        </template>
      </draggable>
    </a-card>
  </div>
</template>

<script lang="ts">
import draggable from "vuedraggable";
import { cloneDeep } from "lodash-es";
import { nanoid } from "nanoid";
import { state } from "../../store";
import { IWidgetConfig } from "../../widgets/type";
import { computed, defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    basicComps: Array,
    advanceComps: Array,
  },
  setup({ basicComps, advanceComps }) {
    const tools = computed(() => {
      return [
        {
          name: "基础组件",
          comps: basicComps ?? [],
        },
        {
          name: "高级组件",
          comps: advanceComps ?? [],
        },
      ];
    });

    return { tools };
  },
  methods: {
    cloneComp(item: IWidgetConfig) {
      const fieldName = `${item.name}_${nanoid(10)}`;
      state.designer.selectFieldName = fieldName;
      return {
        fieldName,
        fieldSchema: cloneDeep(item.schema),
      };
    },
  },
  components: {
    draggable,
  },
});
</script>

<style lang="less" scoped>
.item {
  display: inline-block;
  border: 1px #a5a7a8 solid;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  background-color: white;
}

.tool-container {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  border-right: 1px #ccc solid;
  position: relative;
}
</style>
