import React from "react";

class UserInfor extends React.Component{
    state ={
        name: 'Trang Lam',
        address: 'Ha Noi',
        age: 22
    };
    

    handleOnMouseOver(event){
        console.log(event.pageX)
    }
    handleOnChangeInput = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }
    handleOnChangeAge = (event)=>{
        this.setState({
            age: event.target.value
        })
    }
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm  {this.state.age}
               {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
               <form onSubmit={(event)=>{this.handleOnSubmit(event)}}>
                    <label>Your name: </label>
                    <input 
                        value={this.state.name}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeInput(event)
                        }}
                    />
                    <label>Your age: </label>
                    <input 
                        value={this.state.nage}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeAge(event)
                        }}
                    />
                    <button>Submit</button>
               </form>
            </div>
        );
    }
}
export default UserInfor