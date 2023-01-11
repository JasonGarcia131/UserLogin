import { useNavigate, Link, useSearchParams } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
import jwt_decode from "jwt-decode";
import {CopyToClipboard} from "react-copy-to-clipboard";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const [copied, setCopied] = useState(false);

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

      //Authenticated User
      const { auth } = useAuth();

      //User info decoded from the access token
      const decode = auth.accessToken
          ? jwt_decode(auth.accessToken)
          : undefined
  
      const user = decode?.UserInfo;
  
      console.log("user", user)
      const id = user?.userId;

      // Make link to profile a copy link
    return (
        <section>
            <h1>Home</h1>
            <br />
            <Link to='/profile'>Profile</Link>
            <br />
            <Link to="/news">New upcoming features</Link>
            <br />
            <Link to='/feedback'>Give feedback ?</Link>
            <br />
            <Link to='/about'>About Stars</Link>
            <CopyToClipboard 
                text={`localhost:3000/users/${id}`}
                onCopy={()=>setCopied(true)}
            >
               <button>Copy profile link</button> 
                </CopyToClipboard>
                {copied ? <p>Copied!</p> : ""}
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
