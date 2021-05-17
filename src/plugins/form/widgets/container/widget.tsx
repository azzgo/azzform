import { computed, defineComponent } from "@vue/runtime-core";
import { parseSchemaIntoFields } from "../../utils/parser";
import FieldRender from "../../renderer/components/field-renderer";
import { IField } from "../../renderer/type";

export default defineComponent({
  name: "container",
  components: {},
  props: {
    name: String,
    properties: {
      type: Object,
    },
  },
  setup(props) {
    const fields = computed(() => {
      return parseSchemaIntoFields(props);
    });

    return { fields };
  },
  render() {
    return (
      <>
        {this.fields?.map((field: IField) => (
          <FieldRender key={field.fieldName} fieldSchema={field.fieldSchema} />
        ))}
      </>
    );
  },
});
