<template>
  <header>
    <a-row>
      <a-col>
        <icon type="left" />返回
      </a-col>
      <a-col class="center-menu">
        <div>表单设计</div>
      </a-col>
      <a-col class="action-button">
        <button>预览</button>
        <button>保存</button>
      </a-col>
    </a-row>
  </header>
</template>

<script>
import { Icon, Row, Col } from "ant-design-vue";

export default {
  components: { Icon, ARow: Row, ACol: Col },
};
</script>