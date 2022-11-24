import {Link} from "react-router-dom";

const HomePage = () => {
    return(
        <div className="homepage-wrapper">
            <h1>User Login/ Register Form</h1>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
            <Link to="/users">All Users</Link>
        </div>
    )
}

export default HomePage;