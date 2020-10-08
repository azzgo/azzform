<script>
import { Form, Input, Slider } from "ant-design-vue";
export default {
  props: {
    formData: {
      type: Object,
      default: () => ({
        title: "",
        "ui:options": { placeholder: "" },
        "ui:column": 24,
      }),
    },
  },
  render() {
    return (
      <Form>
        <Form.Item label="标题">
          <Input
            value={this.formData.title}
            onChange={(event) => {
              this.$emit("formDataChange", {
                ...this.formData,
                title: event.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item label="栅格">
          <Slider
            min={1}
            max={24}
            value={this.formData["ui:column"]}
            onChange={(value) => {
              this.$emit("formDataChange", {
                ...this.formData,
                ["ui:column"]: value,
              });
            }}
          />
        </Form.Item>
        <Form.Item label="提示">
          <Input
            value={this.formData["ui:options"].placeholder}
            onChange={(event) => {
              this.$emit("formDataChange", {
                ...this.formData,
                ["ui:options"]: {
                  placeholder: event.target.value,
                },
              });
            }}
          />
        </Form.Item>
      </Form>
    );
  },
};
</script>