export type IWidgetConfig<T = {}> = {
  name: string
  text: string
  schema: IWidgetSchema<T>
}

export type IWidgetSchema<Type = {}> = {
  title: string;
  type: 'string' | 'object' | 'array' | 'number' | 'boolean';
  widget?: string;
  description?: string;
  default?: any;
  column?: number;
} & Type

