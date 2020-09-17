<script>
import draggable from "vuedraggable";
import { widgets } from '@/core/widgets';
import ui from '@/core/contants/ui';
import { getFieldProps } from '@/core/utils/getField';

export default {
  props: {
    schema: Object,
    actived: {
      type: Boolean,
      default: false
    }
  },
  components: {
    draggable,
    ...widgets,
  },
  render(h) {
    const handleClick = this.handleClick.bind(this);
    return h(
      "a-form-item",
      {
        props: {
          label: this.schema.title,
        },
        class: { active: this.actived, "form-item": true },
        nativeOn: {
          click: handleClick
        }
      },
      [
        h(this.schema[ui.widget], {
          props: { ...getFieldProps(this.schema), preview: true }
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