export type IWidgetConfigInfo<T = {}> = {
  text: string;
  category: "basic" | "advance";
  schema: IWidgetSchema<T>;
};

export type IWidgetSchema<Type = {}> = {
  title: string;
  type: "string" | "object" | "array" | "number" | "boolean";
  widget: string;
  description?: string;
  default?: any;
  column?: number;
} & Type;

export type IWidgetConfig<T = {}> = IWidgetConfigInfo<T> & { name: string };
