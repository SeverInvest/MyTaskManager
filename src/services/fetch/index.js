import {
  actionFetchTasksLoading,
  actionFetchTasksSuccess,
  actionFetchTasksError,
  actionFetchRemoveTask,
} from "../../store/slices/tasksSlice";
import { fetchUserLoading, fetchUserSuccess, fetchUserError } from "../../store/slices/userSlice";
import { actionVisiblePopupAlarm } from "../../store/slices/popupSlice";
import endpoints from "../endpoints";

export async function fetchTasks(dispatch) {
  try {
    dispatch(actionFetchTasksLoading(true));
    const response = await endpoints.getTasks();
    dispatch(actionFetchTasksSuccess(response.data));
  } catch (error) {
    dispatch(actionFetchTasksError(error.response.data.message));
  } finally {
    dispatch(actionFetchTasksLoading(false));
  }
}

export async function me(dispatch) {
  try {
    dispatch(fetchUserLoading(true));
    const response = await endpoints.getMe();
    dispatch(fetchUserSuccess(response.data));
    return response;
  } catch (error) {
    dispatch(fetchUserError(error.response.data.message));
  } finally {
    dispatch(fetchUserLoading(false));
  }
}

export async function login(dispatch, email, password) {
  try {
    dispatch(fetchUserLoading(true));
    return await endpoints.loginUser(email, password);
  } catch (error) {
    dispatch(fetchUserError(error.response.data.message));
  } finally {
    dispatch(fetchUserLoading(false));
  }
}

export async function register(dispatch, name, email, password) {
  try {
    dispatch(fetchUserLoading(true));
    return await endpoints.registerUser(name, email, password);
  } catch (error) {
    dispatch(fetchUserError(error.response.data.message));
  } finally {
    dispatch(fetchUserLoading(false));
  }
}

export async function setChangeUser(dispatch, name, email) {
  try {
    dispatch(fetchUserLoading(true));
    const response = await endpoints.patchUser(name, email);
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserError(error.response.data.message));
  } finally {
    dispatch(fetchUserLoading(false));
  }
}

export async function createTask(dispatch, task) {
  try {
    dispatch(actionFetchTasksLoading(true));
    const response = await endpoints.setTask(task);
    dispatch(actionFetchTasksSuccess(response.data));
  } catch (error) {
    dispatch(actionFetchTasksError(error.response.data.message));
    dispatch(actionVisiblePopupAlarm(error.response.data.message));
  } finally {
    dispatch(actionFetchTasksLoading(false));
  }
}

export async function updateTask(dispatch, taskId) {
  try {
    dispatch(actionFetchTasksLoading(true));
    const response = await endpoints.updateVideo(taskId);
    dispatch(actionFetchTasksSuccess(response.data));
  } catch (error) {
    dispatch(actionFetchTasksError(error.response.data.message));
    dispatch(actionVisiblePopupAlarm(error.response.data.message));
  } finally {
    dispatch(actionFetchTasksLoading(false));
  }
}

export async function removeVideo(dispatch, taskId) {
  try {
    dispatch(actionFetchTasksLoading(true));
    const response = await endpoints.deleteVideo(taskId);
    dispatch(actionFetchRemoveTask(response.data.data._id));
    dispatch(actionVisiblePopupAlarm("Задача удалена"));
  } catch (error) {
    dispatch(actionFetchTasksError(error.response.data.message));
    dispatch(actionVisiblePopupAlarm(error.response.data.message));
  } finally {
    dispatch(actionFetchTasksLoading(false));
  }
}
