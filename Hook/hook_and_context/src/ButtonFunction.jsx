import React, {useContext} from "react";

import { AppContext } from "./AppContext";

const ButtonFunction  = () => {

    const {togleLoggedState} = useContext(AppContext)
  
        return (
            <div>
                <button onClick={togleLoggedState}
                 >
                 toggle user state (func component)
                </button>
            </div>
        );
    
}
 
export default ButtonFunction;