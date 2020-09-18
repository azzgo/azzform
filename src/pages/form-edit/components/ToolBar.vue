<template>
  <div class="tool-container">
    <a-card v-for="tool in tools" :key="tool.name" :title="tool.name" :bordered="false">
      <a-row :gutter="[10, 15]">
        <draggable
          :list="tool.comps"
          :clone="cloneComp"
          :group="{ name: 'viewcomps', pull: 'clone', put: false}"
          :sort="false"
        >
          <a-col :span="12" v-for="comp in tool.comps" :key="comp.name">
            <span class="item">{{comp.text}}</span>
          </a-col>
        </draggable>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { cloneDeep } from "lodash-es";
import { nanoid } from "nanoid";

export default {
  props: {
    basicComps: Array,
    advanceComps: Array,
  },
  computed: {
    tools() {
      return [
        {
          name: "基础组件",
          comps: this.basicComps,
        },
        {
          name: "高级组件",
          comps: this.advanceComps,
        },
      ];
    },
  },
  methods: {
    cloneComp(item) {
      return {
        id: `${item.name}_${nanoid(10)}`,
        schema: cloneDeep(item.schema),
      };
    },
    log($event) {
      console.log($event);
    },
  },
  components: {
    draggable,
  },
};
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
