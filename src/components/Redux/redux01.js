// state  - count:0
// action - increment, decrement, reset
// reducer
// store

const {createStore} = require("redux");


// CONSTANTS
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialState = {
    count: 0
}

// CREATING ACTION
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
}

const decrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
}

const resetCounterAction = () => {
    return {
        type: RESET,
    };
}


// CREATING REDUCER

const counterReducer = (state=initialState, action)  => {

    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        default:
            state;
    }
}


// CREATING STORE
const store = createStore(counterReducer);


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCounterAction())
