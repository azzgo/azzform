<template>
<draggable class="prewview" @ended="handleEnd" group="viewcomps">
</draggable>
</template>

<script>
import draggable from 'vuedraggable'


export default {
  name: 'PreviewArea',
  components: {draggable},
  methods: {
    handleEnd(event) {
      console.log(event)
    }
  }
}
</script>

<style lang="less" scoped>
.prewview {
  height: 100%;
  background-color: white;
  overflow-y: auto;
}
</style>