import { jsonClone } from "./common";
import { IWidgetConfig, IWidgetSchema } from "../widgets/type";
import {
  IDesignerWidgetValueConfig,
  IRenderWidgetValueConfig,
} from "../widgets";

export function resolveDefaultValue(
  schema: IWidgetSchema<Record<string, any>>
) {
  const defaultMapping = {
    object: {},
    array: [],
    string: "",
    number: "",
    null: null,
    integer: "",
    boolean: false,
  };

  if (typeof schema.default !== "undefined") {
    return schema.default;
  }

  // array且enum的情况，为多选框，默认值[]
  if (schema.type === "array" && Array.isArray(schema.enum)) {
    return [];
  }

  if (Array.isArray(schema.enum) && schema.enum.length > 0) {
    return schema.enum[0];
  }

  return defaultMapping[schema.type];
}

/**
 * @description 解析合并最新的 formData
 */
export function resolveFormData(
  schema: IWidgetSchema<Record<string, any>>,
  formData: Record<string, any>
) {
  const _data =
    formData == null ? resolveDefaultValue(schema) : jsonClone(formData);

  if (schema.type === "object" && typeof schema.properties === "object") {
    Object.entries(schema.properties).forEach(([key, value]) => {
      // 如过有值，那么就跳过默认值赋值
      if (_data[key] != null) {
        return;
      }

      // 为对应属性赋值
      _data[key] = resolveDefaultValue(value as IWidgetSchema);
    });
  }

  return _data;
}

export function resolveSelectPanelCompGroupConfig(
  widgetsMapping: Record<string, IDesignerWidgetValueConfig>
) {
  const basicComps: IWidgetConfig[] = [];
  const advancedComps: IWidgetConfig[] = [];

  Object.keys(widgetsMapping).forEach((key) => {
    const widgetConfig = widgetsMapping[key].config;
    if (widgetConfig.category === "basic") {
      basicComps.push(widgetConfig);
    }

    if (widgetConfig.category === "advance") {
      advancedComps.push(widgetConfig);
    }
  });

  return { basicComps, advancedComps };
}
