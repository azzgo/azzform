import { IField, ISchema } from "./type";

export function parseObjectSchemaIntoFileds<T extends ISchema = ISchema>(
  schema: T
): IField[] {
  if (schema.type === "object" && typeof schema.properties === "object") {
    return Object.keys(schema.properties).map((propName) => {
      return {
        name: propName,
        schema: schema.properties[propName] as T,
      };
    });
  }

  return [];
}
