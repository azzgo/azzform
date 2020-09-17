<script>
export default {
  name: "c-input",
  props: {
    placeholder: String,
    allowClear: Boolean,
  },
  render() {
    return <a-input placeholder={this.placeholder} allowClear={this.allowClear}  />;
  },
};
</script>