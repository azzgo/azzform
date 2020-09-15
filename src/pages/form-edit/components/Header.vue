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
  </header>
</template>

<script>
export default {
  name: "preview-header-section",
  methods: {
    toPreview() {
      this.$info({
        title: "预览",
        width: '100vw',
        content: this.$createElement("form-create", {
          props: {
            rule: this.$store.getters.rules,
            option: { submitBtn: false }
          }
        })
      });
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