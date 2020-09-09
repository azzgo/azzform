<template>
  <header class="header">
    <a-row type="flex" align="middle">
      <a-col class="nav-back">
        <icon type="left" />返回
      </a-col>
      <a-col class="center-menu" flex="auto">
        <a-space>
          <div class="item active">表单设计</div>
          <div class="item">权限配置</div>
          <div class="item">参数配置</div>
          <div class="item">表单发布</div>
        </a-space>
      </a-col>
      <a-col class="action-button">
        <a-space>
          <a-button type="primary">预览</a-button>
          <a-button type="primary">保存</a-button>
        </a-space>
      </a-col>
    </a-row>
  </header>
</template>

<script>
import { Icon, Row, Col, Space, Button } from "ant-design-vue";

export default {
  components: { Icon, ARow: Row, ACol: Col, ASpace: Space, AButton: Button },
};
</script>

<style lang="less" scoped>
.header {
  padding: 15px 10px;
  box-shadow: #ccc 0 0 10px;
}

.nav-back {
  cursor: pointer;
}

.center-menu {
  display: flex;
  justify-content: center;

  .item {
    padding: 5px 20px;
    text-align: center;
    border-radius: 25px;
    color: black;
    cursor: pointer;

    &.active {
      background-color: #86888a;
      color: white;
    }
  }
}
</style>