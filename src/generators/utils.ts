import { VueConstructor } from "vue/types/umd";
import { ISchema } from ".";
import { UNKNOWN_WIDGET } from "./constants";
import { store } from "./store";

export function registerComponent<
  Widget extends VueConstructor = VueConstructor
>(type: string, comp: Widget) {
  store.widgets.set(type, comp);
}

export function getWidget<Widget extends VueConstructor = VueConstructor>(
  schema: ISchema
): Widget | undefined {
  const Widget = store.widgets.get(schema?.widget ?? schema.type) as Widget;
  if (!Widget) {
    console.info(`No found widget for [${schema.widget ?? schema.type}]`);
    return store.widgets.get(UNKNOWN_WIDGET) as Widget;
  }

  return Widget;
}

