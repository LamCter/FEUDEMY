import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component{
    
    //JSX
    render(){
        return(
            <div>
                <UserInfor/>
                <DisplayInfor/>
            </div>
        );
    }
}
export default MyComponent;