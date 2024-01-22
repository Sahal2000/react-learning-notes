import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant"


export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const resetCounter = () => {
    return {
        type: RESET
    }
}