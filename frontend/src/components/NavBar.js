import { Link } from "react-router-dom";

function NavBar(props) {

    const { theme, handleChangeTheme } = props;

    const buttonStyle = theme === "light" ? "lightNavButton" : "shadowNavButton";

    return (
        <nav className="navBarWrapper">
            <button className={buttonStyle} ><Link to='/'>Home</Link></button>
            <button className={buttonStyle} onClick={()=> handleChangeTheme("light")}>Light</button>
            <button className={buttonStyle} onClick={() => handleChangeTheme("shadow")}>Shadow</button>
        </nav>
    )
}

export default NavBar;