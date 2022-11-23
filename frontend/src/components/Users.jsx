import axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [confirmationPopUp, setConfirmationPopUp] = useState({
        message: "",
        isPopUp: false,
        isConfirmed: false
    });

    console.log("users", users);

    useEffect(()=>{
        axios.get("http://localhost:3005/users/all-users")
        .then((response)=>setUsers(response.data))
    },[]) 
    
    const removeUser = async (toRemoveUser, index) => {
            //Pop up module to confirm user delete
            setConfirmationPopUp((prevData)=>({
                ...prevData,
                isPopUp: true,
                message: `Are you sure you want to delete user ${toRemoveUser}`
            }));
            
            if(confirmationPopUp.isConfirmed){
                await axios.delete(`http://localhost:3005/users/delete/${toRemoveUser.id}`)
                .then(()=>{
                    console.log("User id deleted", toRemoveUser)
                    const newUsers = users.filter((user)=>user.id != toRemoveUser.id);
                    console.log("----------------new users----------------", newUsers);
                    setUsers(newUsers);
                }); 
            }else{
            setConfirmationPopUp((prevData)=>({...prevData, isPopUp: false}))
            }
    }

    const mappedUsers = users.map((user, index)=>{
        return (
           <tr key={index}>
            <td>
                {user.username}
            </td>
            <td>
                {user.email}
            </td>
            <button onClick={()=>removeUser(user, index)}>Remove</button>
            {confirmationPopUp.isPopUp ? 
                <div className="confirmationPopUp">
                    {confirmationPopUp.message}
                    <button onClick={()=>setConfirmationPopUp((prevData)=>({...prevData, isConfirmed: true}))}>Yes</button>
                    <button  onClick={()=>setConfirmationPopUp((prevData)=>({...prevData, isConfirmed: false}))}>No</button>
                </div> 
                : null
            }
            <button>Edit</button>
           </tr>
        )
    }) 
    console.log("users", users);

    return(
        <table className="users-table">
            <thead>
                <td>
                    Username
                </td>
                <td>
                    Email
                </td>
            </thead>
            <tbody>
                 {mappedUsers}
            </tbody>
          
        </table>
    )
}

export default Users;