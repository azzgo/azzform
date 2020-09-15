<script>
import draggable from "vuedraggable";

import Datetime from "../../../components/Datetime.vue";
import Description from "../../../components/Description.vue";
import Input from "../../../components/Input.vue";
import FNumber from "../../../components/Number.vue";
import Radio from "../../../components/Radio.vue";
import Textarea from "../../../components/Textarea.vue";

export default {
  props: {
    rule: Object,
    actived: {
      type: Boolean,
      default: false
    }
  },
  components: {
    draggable,
    [Datetime.name]: Datetime,
    [Description.name]: Description,
    [Input.name]: Input,
    [FNumber.name]: FNumber,
    [Radio.name]: Radio,
    [Textarea.name]: Textarea
  },
  render(h) {
    const handleClick = this.handleClick.bind(this);
    return h(
      "a-form-item",
      {
        props: { label: this.rule.title },
        class: { active: this.actived, "form-item": true },
        nativeOn: {
          click: handleClick
        }
      },
      [
        h(this.rule.type, {
          props: { disabled: true, placeholder: this.rule.placeholder }
        })
      ]
    );
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  border: 1px #ccc dashed !important;
  width: 100%;
  min-height: 40px;
}

.form-item {
  margin-bottom: 0;
}
</style>