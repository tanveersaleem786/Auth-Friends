import React from 'react';



import { axiosWithAuth } from "../utils/axiosWithAuth";

 const DeleteFriend = (props) => {
   axiosWithAuth()
   .put(`api/friends/{props.id}`)
   .then(res => {
    this.props.history.push("/friendsList");
   })
   .catch(err => {
       console.log(err);
   })      
 } 


export default DeleteFriend;