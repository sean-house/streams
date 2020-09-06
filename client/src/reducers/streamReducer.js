import _ from 'lodash';

import {
    CREATE_STREAM, 
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM } from "../actions/types";

const streamReducer = (state={}, action) => {
    switch(action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return _.mapKeys(action.payload, 'id')
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            _.omit(state, action.payload);
            return state;
        default: 
            return state
        
    };
};

export default streamReducer;
