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
        class={{ "preview-field-active": this.actived, "form-item": true }}
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
.form-item {
  margin-bottom: 0;
  background-color: white;

  /deep/ input,
  /deep/ textarea {
    cursor: pointer;
    pointer-events: none;
    resize: none;
  }
}
</style>
