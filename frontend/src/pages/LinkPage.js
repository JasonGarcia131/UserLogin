import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <section>
            <h1>Stars</h1>  
            <p>Your digital journal</p>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </section>
    )
}

export default LinkPage
