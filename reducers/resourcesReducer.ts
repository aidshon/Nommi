import { FETCH_RESOURCES_LIST, FETCH_SINGLE_RESOURCE } from '../actions/types';

const initialState = {
    resources: [],
    singleResource: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RESOURCES_LIST:
            return {
                ...state,
                resources: action.payload
            };
        case FETCH_SINGLE_RESOURCE:
            return {
                ...state,
                singleResource: action.payload
            };
        default:
            return state;
    }
}
