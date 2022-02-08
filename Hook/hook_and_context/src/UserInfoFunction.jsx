import React, { useContext } from "react";

import { AppContext } from "./AppContext";

const UserInfoFunc  = () =>{

    const {isUserLogged} = useContext(AppContext);
    const userLoggedInfo = isUserLogged ? 'Logged in' :'not logged in'

        return (
               <div>           
                    <p>User is {userLoggedInfo} function component </p>
               </div>
        );
    
}
 
export default UserInfoFunc;

