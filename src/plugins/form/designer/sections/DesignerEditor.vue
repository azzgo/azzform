<template>
  <a-row class="container" type="flex">
    <a-col flex="300px" class="sider">
      <SelectorPanel :basicComps="basicComps" :advanceComps="advancedComps" />
    </a-col>
    <a-col flex="auto" class="content">
      <PreviewPanel />
    </a-col>
    <a-col flex="300px" class="sider">
      <ConfigPanel />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import SelectorPanel from "../components/SelectorPanel.vue";
import PreviewPanel from "../components/PreviewPanel.vue";
import ConfigPanel from "../components/ConfigPanel.vue";
import { basicComps, advancedComps } from "../../contants/comps";
import {
  defineComponent,
} from "@vue/runtime-core";

export default defineComponent({
  name: "design-editor",
  data() {
    return {
      // TODO: 后面需要暴露出去可配置
      basicComps: basicComps,
      advancedComps: advancedComps,
    };
  },
  components: {
    SelectorPanel,
    PreviewPanel,
    ConfigPanel,
  },
});
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  flex-wrap: unset;
}

.sider {
  background: white;
}

.content {
  background: #eaecee;
}
</style>

