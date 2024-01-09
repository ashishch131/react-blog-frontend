import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import { json } from "react-router-dom";

const INTIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFeching: false,
    error: false,
};

export const Context = createContext(INTIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INTIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])
    

    return (
        <Context.Provider value={{
            user: state.user,
            isFeching: state.isFeching,
            error: state.error,
        dispatch,
        }}>{children} </Context.Provider>
    )
}