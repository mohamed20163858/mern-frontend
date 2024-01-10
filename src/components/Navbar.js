import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
            <header>
                <div className="container">
                    <Link to="/"><h1>Workout Buddy</h1></Link>
                </div>
                <nav>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">signup</Link>
                    </div>
                </nav>
            </header>
    );
}
 
export default Navbar;