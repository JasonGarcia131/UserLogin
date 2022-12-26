import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {

    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme("light");
    }, [])

    console.log("Theme", theme);

    return (
        <div >
            <Banner theme={theme} setTheme={setTheme} />
            <UserCard theme={theme}/>
        </div>
    )

}

export default Profile;