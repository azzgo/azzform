<template>
  <a-table></a-table>
</template>

<script>
import { Table } from 'ant-design-vue'

export default {
  components: {
    ATable: Table,
  },
  render() {
    return <a-table />
  }
}
</script>