import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

// actions
import { getJoke } from "../actions";
import { getAnswer } from "../actions";

const Joke = props => {
    return (
        <div className="Joke">
            <div className="transparent-box">
                <h1>Jokes That Only Programers Understand</h1>
                <h2>Do you have a programmer's sense of humor?</h2>
                {!props.joke && !props.isFetching && <p>Get a joke to find out</p>}
                {props.isFetching && <Loader type="Circles" color="black" height={80} width={80}/>}
                <br />
                {!props.joke && <button onClick={props.getJoke}>Let's see!</button>}
                {props.joke && !props.isFetching && !props.answer && <p>{props.joke[0].setup}</p>}
                {props.joke && props.answer && !props.isFetching && <p>{props.joke[0].setup}</p>}
                {props.joke && props.answer && !props.isFetching && <p>{props.joke[0].punchline}</p>}
                {!props.answer && props.joke && <button onClick={() => props.getAnswer(props.joke[0].id)}>Get Answer</button>}
                {props.joke && props.answer && <button onClick={props.getJoke}>New Joke</button>}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        joke: state.joke,
        answer: state.answer,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect (mapStateToProps, {getJoke, getAnswer})(Joke);