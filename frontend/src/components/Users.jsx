import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

    //State variable for users fetched from database.
    const [users, setUsers] = useState([]);

    //State variable for pop up message when removing user.
    const [confirmationPopUp, setConfirmationPopUp] = useState({
        id: 0,
        message: "",
        isPopUp: false,
    });

    //Fetches users from the database on component load once.
    useEffect(() => {
        axios.get("http://localhost:3005/users/all-users")
            .then((response) => setUsers(response.data))
    }, [])

    const popUpMessage = (toRemoveUser) => {
        //Configure state variable for the pop up message.
        setConfirmationPopUp((prevData) => ({
            ...prevData,
            id: toRemoveUser.id,
            isPopUp: true,
            message: `Are you sure you want to delete username: ${toRemoveUser.username}?`
        }));
    }

    const confirmed = () => {
        removeUser(confirmationPopUp);
    }

    const removeUser = async (toRemoveUser) => {
        //Pass user id to as a url parameter.
        await axios.delete(`http://localhost:3005/users/delete/${toRemoveUser.id}`)
            .then(() => {
                //Create a new array with remaining users.
                const newUsers = users.filter((user) => user.id != toRemoveUser.id);
                setUsers(newUsers);

                //Clean up state variable for pop up message.
                setConfirmationPopUp((prevData) => ({
                    ...prevData,
                    id: 0,
                    message: "",
                    isPopUp: false
                }));
            });

    }

    //Display Array of users
    const mappedUsers = users.map((user, index) => {
        return (
            <tr key={index}>
                <td>
                    {user.username}
                </td>
                <td>
                    {user.email}
                </td>
                <button onClick={() => popUpMessage(user)}>X</button>
                {/* Edit button in progress */}
                <button>Edit</button>
            </tr>
        )
    })

    return (
        <table className="users-table">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {mappedUsers}
                {/* Conditiionally render pop up message */}
                {confirmationPopUp.isPopUp ?
                    <div className="confirmationPopUp">
                        <p id="popUpText">{confirmationPopUp.message}</p>
                        <button onClick={confirmed}>Yes</button>
                        <button onClick={() => setConfirmationPopUp((prevData) => ({ ...prevData, isPopUp: false }))}>No</button>
                    </div>
                    : null
                }
            </tbody>
            <Link to="/">Return to home</Link>
        </table>
    )
}

export default Users;