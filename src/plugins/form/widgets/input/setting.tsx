import { defineComponent, PropType } from "@vue/runtime-core";
import config from "./config";

export default defineComponent({
  props: {
    formData: {
      type: Object as PropType<typeof config.schema>,
      default: () => config.schema,
    },
  },
  emits: ["formDataChange"],
  render() {
    return (
      <a-form layout="vertical">
        <a-form-item label="标题">
          <a-input
            value={this.formData.title}
            onChange={(event: ChangeEvent) => {
              this.$emit("formDataChange", {
                ...this.formData,
                title: event.target.value,
              });
            }}
          />
        </a-form-item>
        <a-form-item label="栅格">
          <a-slider
            min={1}
            max={24}
            value={this.formData.column}
            onChange={(value: number) => {
              this.$emit("formDataChange", {
                ...this.formData,
                column: value,
              });
            }}
          />
        </a-form-item>
        <a-form-item label="提示">
          <a-input
            value={this.formData.placeholder}
            onChange={(event: ChangeEvent) => {
              this.$emit("formDataChange", {
                ...this.formData,
                placeholder: event.target.value,
              });
            }}
          />
        </a-form-item>
      </a-form>
    );
  },
});
