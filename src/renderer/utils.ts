import { VueConstructor } from "vue/types/umd";
import { ISchema } from ".";
import { store } from "./store";

export function registerComponent<
  Widget extends VueConstructor = VueConstructor
>(type: string, comp: Widget) {
  store.widgets.set(type, comp);
}

export function getWidget<Widget extends VueConstructor = VueConstructor>(
  schema: ISchema
): Widget | undefined {
  const widget = store.widgets.get(schema.widget ?? schema.type) as Widget;
  if (!widget) {
    console.info(`No found widget for [${schema.widget ?? schema.type}]`);
  }

  return widget;
}
