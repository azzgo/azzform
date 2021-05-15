import { IWidgetConfigInfo } from "./type";

export function defineWidget<T = {}>(widgetConfig: IWidgetConfigInfo<T>) {
  return {
    ...widgetConfig,
    name: widgetConfig.schema.widget,
  };
}
