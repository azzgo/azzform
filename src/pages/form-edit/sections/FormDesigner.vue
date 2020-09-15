<template>
  <a-row class="container" type="flex">
    <a-col flex="300px" class="sider">
      <toolbar :basicComps="basicComps" :advanceComps="advancedComps" />
    </a-col>
    <a-col flex="auto" class="content">
      <preview-area></preview-area>
    </a-col>
    <a-col flex="300px" class="sider">
      <editor-panel></editor-panel>
    </a-col>
  </a-row>
</template>

<script>
import Toolbar from "../components/ToolBar.vue";
import PreviewArea from "../components/PreviewArea.vue";
import EditorPanel from "../components/EditorPanel.vue";
import { basicComps, advancedComps } from "../../../constants/comps";

export default {
  data() {
    return {
      basicComps: basicComps,
      advancedComps: advancedComps,
    };
  },
  components: { Toolbar, PreviewArea, EditorPanel }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
}

.sider {
  background: white;
}

.content {
  background: #eaecee;
}
</style>