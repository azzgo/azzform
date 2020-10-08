<script>
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
  emits: ['onFormDataChange'],
  render() {
    return (
      <a-form layout="vertical">
        <a-form-item label="标题">
          <a-input
            value={this.formData.title}
            onChange={(event) => {
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
            value={this.formData["ui:column"]}
            onChange={(value) => {
              this.$emit("formDataChange", {
                ...this.formData,
                ["ui:column"]: value,
              });
            }}
          />
        </a-form-item>
      </a-form>
    );
  },
};
</script>
