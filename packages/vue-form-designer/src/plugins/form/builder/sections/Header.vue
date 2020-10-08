<template>
  <header class="header">
    <a-row type="flex" align="middle">
      <a-col class="nav-back" @click="$emit('goback')">
        <LeftOutlined />
      </a-col>
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
      <form-renderer
        v-model:formData="formData"
        :schema="schema"
      ></form-renderer>
    </a-drawer>
  </header>
</template>

<script>
import Renderer from "../../renderer/components/renderer.vue";
import { state } from "../../store";
import { LeftOutlined } from "@ant-design/icons-vue";

export default {
  name: "designer-header",
  components: {
    [Renderer.name]: Renderer,
    LeftOutlined,
  },
  data() {
    return {
      previewDrawerVisible: false,
      formData: {},
    };
  },
  computed: {
    schema() {
      return state.schema;
    },
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
  min-width: 2em
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
