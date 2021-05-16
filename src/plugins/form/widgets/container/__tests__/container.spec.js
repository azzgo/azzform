import Widget from "../index.vue";
import { shallowMount } from "@vue/test-utils";

describe("GIVEN Container in render mode", () => {
  test("when with a object form schema, it should render all properties widget", () => {
    const schema = {
      type: "object",
      widget: "container",
      properties: {
        name: {
          type: "string",
          widget: "input",
        },
      },
    };

    const wrapper = shallowMount(Widget, {
      props: {
        ...schema,
      },
    });

    expect(wrapper.find("FieldRenderer")).toBeGreaterThan(0);
  });
});
