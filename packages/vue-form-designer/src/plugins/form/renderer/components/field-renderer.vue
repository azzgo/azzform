<script>
import { widgets } from "../../widgets";
export default {
  name: "field-renderer",
  props: {
    field: Object,
    readOnly: Boolean,
    value: { default: null },
  },
  emits: ['change'],
  components: {
    ...widgets,
  },
  render() {
    const Field = widgets[this.field.widget];
    return (
      <a-col span={this.field.column} class="col-item">
        <a-form-item label={this.field.title}>
          <Field
            {...this.field.props}
            readOnly={this.readOnly}
            value={this.value}
            onChange={(val) => this.$emit("change", val)}
          >
            {this.field.children}
          </Field>
        </a-form-item>
      </a-col>
    );
  },
};
</script>

<style scoped>
.col-item {
  padding: 5px 10px;
  box-sizing: border-box;
}
</style>
