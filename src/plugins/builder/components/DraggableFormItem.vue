<script>
import draggable from "vuedraggable";
import FieldRenderer from "@/plugins/renderer/components/field-renderer.vue";
import { fieldParse } from "@/plugins/renderer/utils/parser";
export default {
  props: {
    fieldSchema: {
      type: Object,
      default: () => ({}),
    },
    id: String,
    actived: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    draggable,
    [FieldRenderer.name]: FieldRenderer,
  },
  render() {
    const field = fieldParse(this.id, this.fieldSchema);
    return (
      <field-renderer
        field={field}
        readOnly={true}
        nativeOnClick={this.handleClick}
        class={{ active: this.actived, "form-item": true }}
      ></field-renderer>
    );
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
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