<template>
  <header class="header">
    <a-row type="flex" align="middle">
      <a-col class="nav-back"> </a-col>
      <a-col class="center-menu" flex="auto">
        <div class="item">表单设计</div>
      </a-col>
      <a-col class="action-button">
        <a-space>
          <a-button type="primary" @click="toPreview">预览</a-button>
          <a-button type="primary">保存</a-button>
        </a-space>
      </a-col>
    </a-row>
    <a-drawer
      :visible="previewDrawerVisible"
      @close="previewDrawerVisible = false"
      height="100vh"
      title="预览"
      placement="bottom"
    >
      <form-renderer :schema="schema" v-model="formData"></form-renderer>
    </a-drawer>
  </header>
</template>

<script>
import Renderer from "@/plugins/renderer/components/renderer.vue";
import { Row, Col, Button, Space, Drawer } from "ant-design-vue";

export default {
  name: "preview-header-section",
  props: {
    schema: Object,
  },
  components: {
    [Renderer.name]: Renderer,
    ["a-row"]: Row,
    ["a-col"]: Col,
    ["a-button"]: Button,
    ["a-space"]: Space,
    ["a-drawer"]: Drawer,
  },
  data() {
    return {
      previewDrawerVisible: false,
      formData: {},
    };
  },
  methods: {
    toPreview() {
      this.previewDrawerVisible = true;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  padding: 15px 10px;
  box-shadow: #ccc 0 0 10px;
  position: relative;
  z-index: 10;
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
  }
}
</style>