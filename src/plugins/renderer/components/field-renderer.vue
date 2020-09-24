<script>
import { Col } from "ant-design-vue";
import { widgets } from "../widgets";
export default {
  name: "field-renderer",
  props: {
    field: Object,
    readOnly: Boolean,
  },
  components: {
    ...widgets,
    ["a-col"]: Col,
  },
  render(h) {
    return h(
      "a-col",
      { props: { span: this.field.column }, class: { "col-item": true } },
      [
        h(
          "a-form-item",
          {
            props: {
              label: this.field.title,
            },
          },
          [
            h(
              this.field.widget,
              { props: { ...this.field.props, readOnly: this.readOnly } },
              this.field.children
            ),
          ]
        ),
      ]
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