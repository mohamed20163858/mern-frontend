import { useEffect, useState } from "react";

const Home = () => {
    const [ workouts, setWorkouts ] = useState(null);
    useEffect(() => {
        const fetchWorkouts =  async () => {
            const response = await fetch("/api/workouts");
            const json = await response.json();
          if (response.ok)
          {
            setWorkouts(json);
          }
        }
        fetchWorkouts();
    }, []);
    return (  
        <div className="Home">
            <h2>Home</h2>
            { workouts && workouts.map((workout) => (
                <p key={workout._id}>{workout.title}</p>
            ))}
        </div>
    );
}
 
export default Home;