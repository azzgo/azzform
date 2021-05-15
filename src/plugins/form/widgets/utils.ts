import { IWidgetDefineInfo } from "./type";

export function defineWidget<T = {}>(widgetConfig: IWidgetDefineInfo<T>) {
  return {
    ...widgetConfig,
    name: widgetConfig.schema.widget,
  };
}
