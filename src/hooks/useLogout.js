import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext";

const useLogout = () => { 
    const { dispatch } = useAuthContext();
    const { dispatch: workoutsDispatch } = useWorkoutsContext();
    const logout = () => {
        dispatch({type: "LOGOUT"});
        workoutsDispatch({type: "SET_WORKOUTS", payload: null})
        localStorage.removeItem("user");
    }
   return { logout }
}

export default useLogout