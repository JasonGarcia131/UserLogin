import { Link } from "react-router-dom";

function NavBar(props) {

    const { theme, setTheme } = props;

    const buttonStyle = theme === "light" ? "lightNavButton" : "shadowNavButton";

    return (
        <nav className="navBarWrapper">
            <button className={buttonStyle} ><Link to='/'>Home</Link></button>
            <button className={buttonStyle} onClick={() => setTheme("light")}>Light</button>
            <button className={buttonStyle} onClick={() => setTheme("shadow")}>Shadow</button>
        </nav>
    )
}

export default NavBar;