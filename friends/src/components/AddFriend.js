import React from 'react';
import axios from 'axios';

import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component 
{
   state = {     
       name: "",
       age: "",
       email:""
   }

   handleChange = (e) => {
       this.setState({
           ...this.state , [e.target.name] : e.target.value
       });
   }

  add = (e) => {
    e.preventDefault();

    axiosWithAuth()
    .post('/friends',this.state)
    .then(res => {
      console.log(res);
      //this.setState({friendsList: res.data})
      this.props.history.push("/friendsList");
    })
    .catch(err => {
      console.log(err);
    });


  }


   render() {
       return (
        <div className="main">
         <h2>Add Friend</h2>
            <form onSubmit={this.add}>
            <label>Name:</label>  
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            <br />
            <label>Age:</label>  
            <input
                type="text"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
            />
            <br />
            <label>Email:</label>  
            <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
            />
            <button>Add Friend</button>
            </form>
      </div>
       );
   }

}

export default AddFriend;