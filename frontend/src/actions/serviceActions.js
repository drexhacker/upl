import Axios from 'axios';
import {
  SERVICE_CREATE_FAIL,
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_SUCCESS,
  SERVICE_DETAILS_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_SUCCESS,
  SERVICE_UPDATE_FAIL,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_FAIL,
  SERVICE_DELETE_SUCCESS,
} from '../constants/serviceConstants';

export const listServices = () => async (dispatch) => {
  dispatch({
    type: SERVICE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      '/api/services'
    );
    dispatch({ type: SERVICE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_LIST_FAIL, payload: error.message });
  }
};

export const detailsService = (serviceId) => async (dispatch) => {
  dispatch({ type: SERVICE_DETAILS_REQUEST, payload: serviceId });
  try {
    const { data } = await Axios.get(`/api/services/${serviceId}`);
    dispatch({ type: SERVICE_DETAILS_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createService = (name, image, description) => async (dispatch, getState) => {
  dispatch({ type: SERVICE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/services',
      { name, image, description },
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: SERVICE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SERVICE_CREATE_FAIL, payload: message });
  }
};
export const updateService = (service) => async (dispatch, getState) => {
  dispatch({ type: SERVICE_UPDATE_REQUEST, payload: service });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/services/${service._id}`, service, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SERVICE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SERVICE_UPDATE_FAIL, error: message });
  }
};
export const deleteService = (serviceId) => async (dispatch, getState) => {
  dispatch({ type: SERVICE_DELETE_REQUEST, payload: serviceId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/services/${serviceId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: SERVICE_DELETE_SUCCESS });
    console.log(data);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SERVICE_DELETE_FAIL, payload: message });
  }
};