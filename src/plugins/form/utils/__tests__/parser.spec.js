import { indexedAllFieldSchemaPath } from "../parser";

describe("indexedAllFieldSchemaPath", () => {
  test("A non nest form schema, should cache all properties maped schema", () => {
    const sampleSchema = {
      type: "object",
      properties: {
        name: { type: "string", widget: "input" },
        age: { type: "number", widget: "number" },
        extra: { type: "defaultInfo" },
      },
    };

    const result = indexedAllFieldSchemaPath(sampleSchema);

    expect(result).toEqual({
      name: 'properties.name',
      age: 'properties.age',
    });
  });
});
