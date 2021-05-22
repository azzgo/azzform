<script lang="tsx">
import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  Ref,
} from "@vue/runtime-core";
import { state } from "../../store";
import {
  widgetsDesignerDefaultMapping,
} from "../../widgets";
import { IWidgetSchema } from "../../widgets/type";
import {
  WIDGETS_MAPPING,
  INDEXED_FIELDSCHEMA_PATH,
  SCHEMA,
} from "../../contants/provideNames";
import { get, set } from "lodash";
import { getTargetSchemaPath } from "../../utils/common";

export default defineComponent({
  name: "config-panel",
  setup() {
    const widgetsMapping = inject(
      WIDGETS_MAPPING,
      widgetsDesignerDefaultMapping
    );

    const schema = inject(SCHEMA) as Ref;

    const indexedFieldSchemaPath = inject(
      INDEXED_FIELDSCHEMA_PATH,
      {}
    ) as ComputedRef<Record<string, string>>;

    const activedFieldPath = computed(() => {
        return indexedFieldSchemaPath.value[state.designer.selectFieldName];
      })

    const activedFieldSchema = computed<IWidgetSchema>(() => {
      return get(schema.value, getTargetSchemaPath(activedFieldPath.value));
    });

    const Setting = computed(() => {
      const widgetName = activedFieldSchema.value?.widget;
      return widgetsMapping[widgetName!]?.Setting;
    });

    function handleSettingFormDataChange(val: IWidgetSchema) {
      set(schema.value, getTargetSchemaPath(activedFieldPath.value), val);
    }

    return {
      widgetsMapping,
      Setting,
      activedFieldSchema,
      handleSettingFormDataChange,
    };
  },
  render() {
    // issue at https://github.com/vuejs/vue-next/issues/3224
    const Setting = this.Setting as Newable;
    const activedFieldSchema = this.activedFieldSchema;

    return (
      <div class="editor-panel">
        <div class="tab-panel">
          {Setting ? (
            <Setting
              formData={activedFieldSchema}
              onFormDataChange={this.handleSettingFormDataChange}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  },
});
</script>

<style scoped>
.editor-panel {
  height: 100%;
  height: calc(100vh - 62px);
  max-height: calc(100vh - 62px);
  border-left: 1px solid #ccc;
}

.tab-panel {
  padding: 10px 15px;
}
</style>
