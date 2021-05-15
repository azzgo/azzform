import * as description from "./description";
import * as input from "./input";
import * as range from "./range";
import { IWidgetConfig } from "./type";
import { Component } from "@vue/runtime-core";

const defaultWidgetList = [description, input, range];

export interface IRenderWidgetValueConfig {
  config: IWidgetConfig;
  Widget: Component;
}
export interface IDesignerWidgetValueConfig {
  config: IWidgetConfig;
  Widget: Component;
  Preview: Component;
  Setting: Component;
}

export const widgetsRenderDefaultMapping = defaultWidgetList.reduce<
  Record<string, IRenderWidgetValueConfig>
>((prev, cur) => {
  prev[cur.config.schema.widget!] = {
    config: cur.config,
    Widget: cur.Widget,
  };
  return prev;
}, {} as any);

export const widgetsDesignerDefaultMapping = defaultWidgetList.reduce<
  Record<string, IDesignerWidgetValueConfig>
>((prev, cur) => {
  prev[cur.config.schema.widget!] = {
    config: cur.config,
    Widget: cur.Widget,
    Setting: cur.Setting,
    Preview: (cur as any).Preview ?? cur.Widget,
  };
  return prev;
}, {} as any);
