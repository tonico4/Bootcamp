// Async action types
/**
 * Action type = API_CALL_REQUEST
 */
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
/**
 * Action type = API_CALL_SUCCESS
 */
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
/**
 * Action type = API_CALL_FAILURE
 */
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

// Login action dispatcher

/**
 * This method do a post to login in an API. Payload contains the HTTP request body type: {body, try, catch}
 * @param {string} email 
 * @param {string} password 
 * @returns the body of http post: {method, url, data}
 */
export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email,
                    password
                }
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}

// Generic http request action dispatcher

/**
 * Generic HTTP request method
 * @param {} method 
 * @param {} url 
 * @param {} data 
 * @returns 
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method,
            url,
            data
        },
        okAction: API_CALL_SUCCESS,
        failAction: API_CALL_FAILURE
    }
}