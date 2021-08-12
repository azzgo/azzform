import { IField } from "../renderer/type";
import { checkIsWidget } from "./common";

export function parseSchemaIntoFields(
  schema: Record<string, any>
): IField[] | undefined {
  if (schema.type === "object" && typeof schema.properties === "object") {
    return Object.keys(schema.properties).map((propName) => {
      return {
        fieldName: propName,
        fieldSchema: schema.properties[propName],
      };
    });
  }
}

export function indexedAllFieldDataPath(
  schema: Record<string, any>,
  pathPrefix: string = ""
): Record<string, string> {
  const indexedFieldPath: Record<string, string> = {};

  if (schema.type === "object" && typeof schema.properties === "object") {
    Object.keys(schema.properties).forEach((propName) => {
      const fieldSchema = schema.properties[propName];
      if (checkIsWidget(fieldSchema)) {
        if (pathPrefix.length > 0) {
          indexedFieldPath[
            propName
          ] = `${pathPrefix}.${propName}`;
        } else {
          indexedFieldPath[propName] = propName;
        }
      }

      if (
        fieldSchema.type === "object" &&
        typeof schema.properties === "object"
      ) {
        Object.assign(
          indexedFieldPath,
          indexedAllFieldDataPath(schema.properties[propName], propName)
        );
      }
    });
  }

  return indexedFieldPath;
}
