export interface IWidgetBaseSchema {
  type: "string" | "object" | "array" | "number" | "boolean" | "void";
  title?: string;
  widget?: string;
  description?: string;
  default?: unknown;
  column?: number;
  properties?: Record<string, unknown>;
}

export type ISchema<T extends IWidgetBaseSchema = IWidgetBaseSchema> = T;

export interface IField<T extends ISchema = ISchema> {
  name?: string;
  Widget: Vue.VueConstructor
  schema: T;
}
