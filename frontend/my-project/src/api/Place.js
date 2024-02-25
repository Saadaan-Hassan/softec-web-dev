import {
    deleteRequest,
    getRequestWithParams,
    getRequest,
    postRequest,
    postFormRequest,
    putRequestWithHeadersParams,
  } from ".";
  
  export const getPlaces = (id,params) => {
    if (params) {
      return getRequestWithParams(
        `/places?`,
        params
      );
    }
    return getRequest(
      `/places`
    );
  };
  
  export const deletePlaces = (id) => deleteRequest(`/places/${id}`);
  
  export const addPlaces = (params) => postRequest("/places", params);
  
  export const updatePlaces = (id, params) =>
    putRequestWithHeadersParams(`/places/${id}`, params);
  