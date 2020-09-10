<template>
  <div class="container">
    <a-card title="基础组件" :bordered="false">
      <a-row :gutter="[10, 15]">
        <a-col :span="12" v-for="comp in basicComps" :key="comp.name">
          <draggable>
            <span class="item">{{comp.name}}</span>
          </draggable>
        </a-col>
      </a-row>
    </a-card>
    <a-card title="高级组件" :bordered="false">
      <a-row :gutter="[10, 15]">
        <a-col :span="12" v-for="comp in advanceComps" :key="comp.name">
          <draggable>
            <span class="item">{{comp.name}}</span>
          </draggable>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { Card, Row, Col } from "ant-design-vue";
import draggable from "vuedraggable";

export default {
  props: {
    basicComps: Array,
    advanceComps: Array,
  },
  components: {
    ACard: Card,
    ARow: Row,
    ACol: Col,
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

.container {
  border-right: 1px #ccc solid;
  position: relative;
}
</style>