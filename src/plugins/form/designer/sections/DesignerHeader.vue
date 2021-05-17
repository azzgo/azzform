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
      <Renderer v-model:formData="formData" :schema="schema" />
    </a-drawer>
  </header>
</template>

<script lang="ts">
import Renderer from "../../renderer/components/renderer";
import { LeftOutlined } from "@ant-design/icons-vue";
import { defineComponent, inject, reactive, toRefs } from "@vue/runtime-core";
import { SCHEMA } from "../../contants/provideNames";

export default defineComponent({
  name: "designer-header",
  components: {
    Renderer,
    LeftOutlined,
  },
  setup() {
    const data = reactive({
      previewDrawerVisible: false,
      formData: {},
    });

    const schema = inject(SCHEMA);

    function toPreview() {
      data.previewDrawerVisible = true;
    }

    return { toPreview, ...toRefs(data), schema };
  },
});
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
  min-width: 2em;
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
