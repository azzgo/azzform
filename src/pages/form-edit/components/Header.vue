<template>
  <header class="header">
    <a-row type="flex" align="middle">
      <a-col class="nav-back">
        <a-icon type="left" />返回
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
    <a-drawer :visible="previewDrawerVisible" @close="previewDrawerVisible = false" height="100vh" title="预览" placement="bottom" >
      <form-renderer :schema="formSchema"></form-renderer>
    </a-drawer>
  </header>
</template>

<script>
import Renderer from '@/core/widgets/renderer/index.vue'
import { fromPairs } from 'lodash-es'
export default {
  name: "preview-header-section",
  components: {
    [Renderer.name]: Renderer,
  },
  data() {
    return {
      previewDrawerVisible: false,
    }
  },
  computed: {
    formSchema() {
      return {
        type: 'object',
        properties: fromPairs(this.$store.state.draggableFields.map((field) => [field.id, field.schema]))
      }
    }
  },
  methods: {
    toPreview() {
      this.previewDrawerVisible = true
    }
  }
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