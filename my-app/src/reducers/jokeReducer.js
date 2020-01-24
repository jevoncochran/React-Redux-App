import { FETCH_JOKE_START } from "../actions";
import { FETCH_JOKE_SUCCESS } from "../actions";
import { FETCH_ANSWER_START } from "../actions";
import { FETCH_ANSWER_SUCCESS } from "../actions";

const initialState = {
    joke: null,
    answer: null,
    isFetching: false,
    error: ''
};

export const jokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOKE_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_JOKE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                joke: action.payload,
                answer: null,
                error: ''
            }
        case FETCH_ANSWER_START: 
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ANSWER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // joke: action.payload,
                answer: true,
            }
        default:
            return state;
    }
}

