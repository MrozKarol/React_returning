import React, {PureComponent} from "react";

import { AppContext } from "./AppContext";

class Button extends PureComponent {
  
    render() { 
        return (
            <AppContext.Consumer>
                {
                    ({togleLoggedState})=>(
                        <button onClick={togleLoggedState}
                        >
                            toggle user state
                         </button>
                    )
                }
            </AppContext.Consumer>
           
        );
    }
}
 
export default Button;