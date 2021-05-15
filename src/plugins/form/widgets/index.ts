import { IWidgetConfig } from "./type";
import { Component } from "@vue/runtime-core";
import requireContext from 'require-context.macro'

const contexts = requireContext('.', true, /[\w-]+\/index.ts$/)

const defaultWidgetList = contexts.keys().map(key => contexts(key));

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
  prev[cur.config.schema.widget] = {
    config: cur.config,
    Widget: cur.Widget,
  };
  return prev;
}, {} as any);

export const widgetsDesignerDefaultMapping = defaultWidgetList.reduce<
  Record<string, IDesignerWidgetValueConfig>
>((prev, cur) => {
  prev[cur.config.schema.widget] = {
    config: cur.config,
    Widget: cur.Widget,
    Setting: cur.Setting,
    Preview: (cur as any).Preview ?? cur.Widget,
  };
  return prev;
}, {} as any);
