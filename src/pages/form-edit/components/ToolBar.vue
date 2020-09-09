<template>
  <div class="container">
    <a-card title="基础组件" :bordered="false">
      <a-row :gutter="[10, 15]" >
        <a-col :span="12" v-for="comp in basicComps" :key="comp.name">
          <span class="item">{{comp.name}}</span>
        </a-col>
      </a-row>
    </a-card>
    <a-card title="高级组件" :bordered="false">
      <a-row :gutter="[10, 15]" >
        <a-col :span="12" v-for="comp in advanceComps" :key="comp.name">
          <span class="item">{{comp.name}}</span>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { Card, Row, Col } from "ant-design-vue";

export default {
  props: {
    basicComps: Array,
    advanceComps: Array,
  },
  components: {
    ACard: Card,
    ARow: Row,
    ACol: Col
  },
};
</script>

<style lang="less" scoped>
.item {
  display: inline-block;
  border: 1px #A5A7A8 solid;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
}

.container {
  box-shadow: #ccc 6px 5px 10px;
  position: relative;
  z-index: 1;
}
</style>