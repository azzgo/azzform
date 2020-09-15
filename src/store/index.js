import Vuex from "vuex";

export const COMMIT_TYPE = {
  draggableFields_update: "draggableFields_update",
  draggableFields_reset: "draggableFields_reset",
};

export function createStore() {
  return new Vuex.Store({
    state: {
      draggableFields: [],
    },
    getters: {
      rules(state) {
        return state.draggableFields.map((field) => field?.rule);
      },
    },
    mutations: {
      [COMMIT_TYPE.draggableFields_update](state, value) {
        state.draggableFields = value;
      },
      [COMMIT_TYPE.draggableFields_reset](state) {
        state.draggableFields = [];
      },
    },
  });
}
