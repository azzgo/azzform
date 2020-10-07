<template>
  <a-row class="container" type="flex">
    <a-col flex="300px" class="sider">
      <toolbar :basicComps="basicComps" :advanceComps="advancedComps" />
    </a-col>
    <a-col flex="auto" class="content">
      <preview-area @selectFieldChange="selectFieldId = $event"></preview-area>
    </a-col>
    <a-col flex="300px" class="sider">
      <editor-panel
        :activedField="activedField"
        @settingChange="handleSettingChange"
      ></editor-panel>
    </a-col>
  </a-row>
</template>

<script>
import Toolbar from "../components/ToolBar.vue";
import PreviewArea from "../components/PreviewArea.vue";
import EditorPanel from "../components/EditorPanel.vue";
import { basicComps, advancedComps } from "../constants/comps";
import { Row, Col } from "ant-design-vue";
import { state } from "../store";

export default {
  computed: {
    activedField() {
      return state.schema?.properties?.[this.selectFieldId];
    },
  },
  data() {
    return {
      basicComps: basicComps,
      selectFieldId: null,
      advancedComps: advancedComps,
    };
  },
  methods: {
    handleSettingChange(val) {
      state.schema.properties[this.selectFieldId] = val;
    },
  },
  components: {
    Toolbar,
    PreviewArea,
    EditorPanel,
    ["a-row"]: Row,
    ["a-col"]: Col,
  },
};
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