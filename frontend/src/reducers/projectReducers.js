const {
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_FAIL,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_RESET,
    PROJECT_UPDATE_REQUEST,
    PROJECT_UPDATE_SUCCESS,
    PROJECT_UPDATE_FAIL,
    PROJECT_UPDATE_RESET,
    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_FAIL,
    PROJECT_DELETE_RESET,
    PROJECT_REVIEW_CREATE_REQUEST,
    PROJECT_REVIEW_CREATE_SUCCESS,
    PROJECT_REVIEW_CREATE_FAIL,
    PROJECT_REVIEW_CREATE_RESET,
    PROJECT_LIST_COMPLETED_REQUEST,
    PROJECT_LIST_COMPLETED_SUCCESS,
    PROJECT_LIST_COMPLETED_FAIL,
    PROJECT_LIST_ONGOING_REQUEST,
    PROJECT_LIST_ONGOING_SUCCESS,
    PROJECT_LIST_ONGOING_FAIL,
  } = require('../constants/projectConstants');
  
  export const projectListReducer = (
    state = { loading: true, projects: [] },
    action
  ) => {
    switch (action.type) {
      case PROJECT_LIST_REQUEST:
        return { loading: true };
      case PROJECT_LIST_SUCCESS:
        return {
          loading: false,
          projects: action.payload,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case PROJECT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const projectListCompletedReducer = (
    state = { loading: true, completedProjects: [] },
    action
  ) => {
    switch (action.type) {
      case PROJECT_LIST_COMPLETED_REQUEST:
        return { loading: true };
      case PROJECT_LIST_COMPLETED_SUCCESS:
        return {
          loading: false,
          completedProjects: action.payload,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case PROJECT_LIST_COMPLETED_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const projectListOngoingReducer = (
    state = { loading: true, ongoingProjects: [] },
    action
  ) => {
    switch (action.type) {
      case PROJECT_LIST_ONGOING_REQUEST:
        return { loading: true };
      case PROJECT_LIST_ONGOING_SUCCESS:
        return {
          loading: false,
          ongoingProjects: action.payload,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case PROJECT_LIST_ONGOING_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const projectDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case PROJECT_DETAILS_REQUEST:
        return { loading: true };
      case PROJECT_DETAILS_SUCCESS:
        return { loading: false, project: action.payload };
      case PROJECT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const projectCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_CREATE_REQUEST:
        return { loading: true };
      case PROJECT_CREATE_SUCCESS:
        return { loading: false, success: true, project: action.payload };
      case PROJECT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PROJECT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const projectUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_UPDATE_REQUEST:
        return { loading: true };
      case PROJECT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case PROJECT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case PROJECT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const projectDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_DELETE_REQUEST:
        return { loading: true };
      case PROJECT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PROJECT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case PROJECT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const projectReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case PROJECT_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case PROJECT_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PROJECT_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  