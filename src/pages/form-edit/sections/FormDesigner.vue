<template>
  <a-row class="container" type="flex">
    <a-col flex="300px" class="sider">
      <toolbar :basicComps="basicComps" :advanceComps="advancedComps" />
    </a-col>
    <a-col flex="auto" class="content"></a-col>
    <a-col flex="300px" class="sider">编辑栏</a-col>
  </a-row>
</template>

<script>
import Toolbar from "../components/ToolBar.vue";
import { Row, Col } from "ant-design-vue";

const basicComps = [
  {
    name: "描述",
  },
  {
    name: "单行文本",
  },
  {
    name: "多行文本",
  },
  {
    name: "日期时间",
  },
  {
    name: "数字",
  },
  {
    name: "单选按扭组",
  },
];

const advancedComps = [
  {
    name: "编组区域",
  },
  {
    name: "矩阵组合",
  },
  {
    name: "地址",
  },
  {
    name: "定位",
  },
  {
    name: "子表单",
  },
];

export default {
  data() {
    return {
      basicComps,
      advancedComps,
    };
  },
  components: { Toolbar, ARow: Row, ACol: Col },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  height: calc(100vh - 62px);
}

.sider {
  background: white;
}

.content {
  background: #EAECEE;
}
</style>