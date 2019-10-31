import {FETCH_USER} from "../actions/userActions";

const initialState = {
    validToken: false,
    user: {}
};


export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            };


        default:
            return state;
    }
}
