import {FETCH_SITES} from "../actions/Actions";

const initialState = {

    site: {}
};


export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_SITES:
            return {
                ...state,
                user: action.payload
            };


        default:
            return state;
    }
}
