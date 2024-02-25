import {
    deleteRequest,
    getRequestWithParams,
    getRequest,
    postRequest,
    postFormRequest,
    putRequestWithHeadersParams,
} from ".";

export const getQueries = (id, params) => {
    if (params) {
        return getRequestWithParams(
            `/queries?`,
            params
        );
    }
    return getRequest(
        `/queries`
    );
};

export const getAnswQueries = (id, params) => {
    if (params) {
        return getRequestWithParams(
            `/queries/AnsweredQueries?`,
            params
        );
    }
    return getRequest(
        `/queries/AnsweredQueries`
    );
};

export const addAnswer = (id, params) =>
    putRequestWithHeadersParams(`/queries/${id}`, params);
