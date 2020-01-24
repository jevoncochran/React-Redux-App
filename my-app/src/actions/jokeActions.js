import axios from "axios";

export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_ANSWER_START = 'FETCH_ANSWER_START';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';

// async action creator
export const getJoke = () => dispatch => { // implicit return
        dispatch({ type: FETCH_JOKE_START });
        axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data });
        })
        .catch(err => console.log(err))
};

// export const getAnswer = joke => dispatch => {
//     dispatch({ type: FETCH_ANSWER_START });
//     axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
//     .then(res => {
//         dispatch({ type: FETCH_ANSWER_SUCCESS, payload: joke.punchline })
//     })
//     .catch(err => console.log(err))
// }

export const getAnswer = answer => {
    return { type: FETCH_ANSWER_SUCCESS }
}