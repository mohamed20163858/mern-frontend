import { createContext, useReducer } from "react";
export const AuthContext =  createContext();
export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        // case 'CREATE_WORKOUTS':
        //     return { workouts: [action.payload, ...state.workouts]}
        // case 'DELETE_WORKOUT':
        //     return {workouts: state.workouts.filter((w) => w._id !== action.payload._id)}
        default:
            return state
    }
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    } )
    console.log("Authentication state", state);
    return( 
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}