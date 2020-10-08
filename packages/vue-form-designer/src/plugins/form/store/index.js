import { reactive } from 'vue'


export let state = {
  designer: {
    selectFieldId: null,
  },
  schema: {
    type: "object",
    properties: {},
  },
};

/**
 *
 * @param {import("vue").observable} Vue Vue 实例
 */
export function createStore() {
  state = reactive(state);
}
