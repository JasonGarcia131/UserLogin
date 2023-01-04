import { Link } from "react-router-dom";

function NavBar(props) {

    const { theme, setTheme } = props;

    return (
        <nav className="navBarWrapper">
            <button onClick={() => setTheme("light")}>Light</button>
            <button><Link to='/'>Home</Link></button>
            <button onClick={() => setTheme("shadow")}>Shadow</button>
        </nav>
    )
}

export default NavBar;