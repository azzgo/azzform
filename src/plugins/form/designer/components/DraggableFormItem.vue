<script lang="tsx">
import { computed, defineComponent, PropType } from "@vue/runtime-core";
import draggable from "vuedraggable";
import FieldRenderer from "../../renderer/components/field-renderer.vue";
import { state } from "../../store";
import { IWidgetConfig } from "../../widgets/type";
export default defineComponent({
  props: {
    fieldSchema: {
      type: Object as PropType<IWidgetConfig>,
      require: true,
    },
    fieldName: String,
  },
  setup(props) {
    const actived = computed(() => {
      return props.fieldName === state.designer.selectFieldName;
    });

    return { actived };
  },
  components: {
    draggable,
    [FieldRenderer.name]: FieldRenderer,
  },
  render() {
    return (
      <field-renderer
        fieldSchema={this.fieldSchema}
        readOnly={true}
        onClick={this.handleClick}
        class={{ active: this.actived, "form-item": true }}
      ></field-renderer>
    );
  },
  methods: {
    handleClick() {
      state.designer.selectFieldName = this.fieldName!;
    },
  },
});
</script>

<style lang="less" scoped>
.active {
  border: 1px #ccc dashed !important;
  min-height: 40px;
}

.form-item {
  margin-bottom: 0;

  /deep/ input:read-only,
  /deep/ textarea:read-only {
    cursor: pointer;
  }
}
</style>
