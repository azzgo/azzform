<template>
  <div>
    <designer-header @goback="$emit('goback')" />
    <div class="main-sesion">
      <designer-editor />
    </div>
  </div>
</template>

<script lang="ts">
import DesignerHeader from "./sections/DesignerHeader.vue";
import DesignerEditor from "./sections/DesignerEditor.vue";
import { ref } from "@vue/reactivity";
import {
  defineComponent,
  PropType,
  provide,
  watch,
} from "@vue/runtime-core";
import {
  INDEXED_FIELD_DATA_PATH,
  SCHEMA,
  WIDGETS_MAPPING,
} from "../contants/provideNames";
import {
  IDesignerWidgetValueConfig,
  widgetsDesignerDefaultMapping,
} from "../widgets";
import { IWidgetSchema } from "../widgets/type";
import { indexedAllFieldDataPath } from "../utils/parser";

export default defineComponent({
  name: "form-designer",
  props: {
    widgetsMapping: {
      type: Object as PropType<Record<string, IDesignerWidgetValueConfig>>,
      default: () => widgetsDesignerDefaultMapping,
    },
    schema: {
      type: Object as PropType<IWidgetSchema>,
      default: () => ({}),
    },
  },
  emits: ["goback"],
  components: {
    DesignerHeader,
    DesignerEditor,
  },
  setup(props) {
    const schema = ref(props.schema);
    provide(SCHEMA, schema);

    provide(WIDGETS_MAPPING, props.widgetsMapping);

    const indexedFieldPath =  ref<Record<string, string>>({})

    watch(schema, () => {
      indexedFieldPath.value = indexedAllFieldDataPath(schema.value)
    }, { immediate: true, deep: true})

    provide(INDEXED_FIELD_DATA_PATH, indexedFieldPath);
  },
});
</script>
