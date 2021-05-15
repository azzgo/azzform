<template>
  <a-row class="container" type="flex">
    <a-col flex="300px" class="sider">
      <SelectorPanel
        :basicComps="compsConfig.basicComps"
        :advancedComps="compsConfig.advancedComps"
      />
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
import { computed, defineComponent, inject } from "@vue/runtime-core";
import { WIDGETS_MAPPING } from "../../contants/provideNames";
import { resolveSelectPanelCompGroupConfig } from "../../utils/resolve";

export default defineComponent({
  name: "design-editor",
  setup() {
    const widgetsMapping = inject(WIDGETS_MAPPING, {});

    const compsConfig = computed(() =>
      resolveSelectPanelCompGroupConfig(widgetsMapping)
    );

    return { compsConfig };
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

