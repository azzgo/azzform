<script lang="tsx">
import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  Ref,
} from "@vue/runtime-core";
import { state } from "../../store";
import { widgetsDesignerDefaultMapping } from "../../widgets";
import { IWidgetSchema } from "../../widgets/type";
import {
  WIDGETS_MAPPING,
  INDEXED_FIELDSCHEMA_PATH,
  SCHEMA,
} from "../../contants/provideNames";
import { get, set } from "lodash";

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

    const Setting: any = computed(() => {
      const activedFieldPath =
        indexedFieldSchemaPath.value[state.designer.selectFieldName];
      const widgetName = get(schema.value, activedFieldPath)?.widget;
      console.log(widgetName)
      return widgetsMapping[widgetName!]?.Setting;
    });

    const activedFieldSchema = computed(() => {
      const activedFieldPath =
        indexedFieldSchemaPath.value[state.designer.selectFieldName];
      return get(schema.value, activedFieldPath);
    });

    function handleSettingFormDataChange(val: IWidgetSchema) {
      const activedFieldPath =
        indexedFieldSchemaPath.value[state.designer.selectFieldName];
      set(schema.value, activedFieldPath, val);
    }

    return {
      widgetsMapping,
      Setting,
      activedFieldSchema,
      handleSettingFormDataChange,
    };
  },
  render() {
    const Setting = this.Setting;
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
