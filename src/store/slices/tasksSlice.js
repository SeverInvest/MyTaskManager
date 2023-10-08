import { createSlice } from "@reduxjs/toolkit";
import { buildSlice } from "../../utils";

const initialState = {
  tasks: {},
  isLoading: false,
  error: "",
  keys: [],
  countKeys: 0,
};

const deleteTask = (obj, id) => {
  const { [id]: foo, ...rest } = obj;
  return rest;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    actionFetchTasksLoading(state, action) {
      state.isLoading = action.payload;
    },
    actionFetchTasksSuccess(state, action) {
      state.error = "";
      state.tasks = { ...(state.tasks || {}), ...buildSlice(action.payload) };
      state.keys = Object.keys(state.tasks).map(key => key);
      state.countKeys = state.keys.length;
    },
    actionFetchTasksError(state, action) {
      state.error = action.payload;
    },
    actionFetchRemoveTask(state, action) {
      state.error = "";
      state.tasks = deleteTask(state.tasks, action.payload);
      state.keys = Object.keys(state.tasks).map(key => key);
      state.countKeys = state.keys.length;
    },
    actionResetTasks() {
      return { ...initialState };
    },
  },
});

export const {
  actionFetchTasksLoading,
  actionFetchTasksSuccess,
  actionFetchTasksError,
  actionFetchRemoveTask,
  actionResetTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
