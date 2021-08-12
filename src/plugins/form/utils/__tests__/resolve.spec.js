import { resolveFormData, resolveSelectPanelCompGroupConfig } from "../resolve";

describe("FormDataResolver", () => {
  const schema = {
    type: "object",
    properties: {
      container: {
        type: "object",
        widget: "container",
        properties: {
          name: {
            type: "string",
            widget: "input",
          },
        },
      },
      job: {
        type: "string",
        widget: "select",
      },
      yearsOfWorking: {
        type: "number",
        widget: "number",
        default: 1,
      },
    },
  };
  test("when no initial value provide, it will resolve from JSON Schema", () => {
    const result = resolveFormData(schema);

    expect(result).toEqual({
      container: { name: "" },
      job: "",
      yearsOfWorking: 1,
    });
  });

  test("when value already exist, only patch with unintialized prop resolve from JSON Schema", () => {
    const formData = { job: "police", yearsOfWorking: 5 };

    const result = resolveFormData(schema, formData);

    expect(result).toEqual({
      container: { name: "" },
      job: "police",
      yearsOfWorking: 5,
    });
  });
});

describe("resolveSelectPanelCompGroupConfig", () => {
  test("given a widget list, I can get a  select panel group", () => {
    const widgetList = {
      input: { config: { name: "input", category: "basic" } },
      text: { config: { name: "text", category: "basic" } },
      id: { config: { name: "id", category: "advance" } },
      number: { config: { name: "number", category: "math" } },
    };

    const result = resolveSelectPanelCompGroupConfig(widgetList);

    expect(result).toEqual({
      basicComps: [
        { name: "input", category: "basic" },
        { name: "text", category: "basic" },
      ],
      advancedComps: [{ name: "id", category: "advance" }],
    });
  });
});
