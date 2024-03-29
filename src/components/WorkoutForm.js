import { useState  } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const { dispatch } = useWorkoutsContext();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps}
        const response = await fetch("/api/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        });
        const json = await response.json();
        if(!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if(response.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            setEmptyFields([]);
            dispatch({ type: 'CREATE_WORKOUTS', payload: json });
            console.log("new workout added ", json)
        }

    }
    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Workout Form</h3>
            <label>Execrise title </label>
            <input type="text" onChange={(e) => setTitle(e.target.value) } value={title}  
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Execrise Load in (kg) </label>
            <input type="number" onChange={(e) => setLoad(e.target.value) } value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Execrise reps </label>
            <input type="number" onChange={(e) => setReps(e.target.value) } value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error && (<div className="error">{error}</div>)}

        </form>
     );
}
 
export default WorkoutForm;