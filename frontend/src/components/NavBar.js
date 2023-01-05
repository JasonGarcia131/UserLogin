import { Link } from "react-router-dom";

function NavBar(props) {

    const { theme, setTheme } = props;

    return (
        <nav className="navBarWrapper">
            <button><Link to='/'>Home</Link></button>
            <button className={theme === "light" ? "lightNavButton" : "shadowNavButton"} onClick={() => setTheme("light")}>Light</button>
            <button className={theme === "light" ? "lightNavButton" : "shadowNavButton"} onClick={() => setTheme("shadow")}>Shadow</button>
        </nav>
    )
}

export default NavBar;