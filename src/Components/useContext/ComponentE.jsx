import React, { useContext } from "react";
import { userContext } from "./App";
const ComponentE = () => {
  const user = useContext(userContext);
  return (
    <div>
      <div>{user}---Component E</div>
      {/* <userContext.Consumer>
            {
                user=>{
                    return <div>
                        user Context value {user}
                    </div>
                }
            }
        </userContext.Consumer> */}
    </div>
  );
};

export default ComponentE;
