export let state = {
  schema: {
    type: "object",
    properties: {},
  },
};

/**
 *
 * @param {import("vue").VueConstructor} Vue Vue 实例
 */
export function createStore(Vue) {
  state = Vue.observable({
    schema: {
      type: "object",
      properties: {},
    },
  });
}
