import { get } from "lodash";
import { getTargetSchemaPath } from "../common";

test("give a data path, i can get target value json schema definition", () => {
  const dataPath = "container.name";
  const schema = {
    properties: {
      container: {
        properties: {
          name: {
            type: "string",
            title: "name",
            description: "your name",
          },
        },
      },
    },
  };

  const schemaPath = getTargetSchemaPath(dataPath);

  expect(get(schema, schemaPath)).toEqual({
    type: "string",
    title: "name",
    description: "your name",
  });
});
