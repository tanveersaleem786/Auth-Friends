import React from 'react';

import { axiosWithAuth } from "../utils/axiosWithAuth";

class UpdateFriend extends React.Component 
{
  
   state = {                  
       name: window.history.state.state.props.name,
       age: window.history.state.state.props.age,
       email:window.history.state.state.props.email
   }

   handleChange = (e) => {
       this.setState({
           ...this.state , [e.target.name] : e.target.value
       });
   }

  update = (e) => {
    e.preventDefault();

    axiosWithAuth()
    .put(`friends/${window.history.state.state.props.id}`,this.state)
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
         <h2>Update Friend</h2>         
          
          <form onSubmit={this.update}>
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
            <button>Update Friend</button>
          </form>
      </div>
       );
   }

}

export default UpdateFriend;