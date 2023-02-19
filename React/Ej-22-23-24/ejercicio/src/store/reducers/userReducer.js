import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE} from '../actions/asyncActions';

const initialState = {
    fetching: false,
    token: null,
    error: null,
    loged: false
}

export const userReducer = (state=initialState, action) => {
    switch (state) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                token: null,
                error: false,
                loged: false
            }
    
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                token: action.payload.token,
                error: false,
                loged: true
            }

        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                token: null,
                error: true,
                loged: false
            }

        default:
            return state;
    }
}