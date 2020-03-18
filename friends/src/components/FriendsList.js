import React from 'react';
import axios from 'axios';



import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component 
{

    state = {
        friendsList: []
    }

    componentDidMount() {
       this.getFriendsList();
    }

    getFriendsList = () => {

        axiosWithAuth()
        .get('/friends')
        .then(res => {
          console.log(res);
          this.setState({friendsList: res.data})
        })
        .catch(err => {
          console.log(err);
        });
    } 

    deleteFriend = (props) => {
        axiosWithAuth()
        .delete(`friends/${props.id}`)
        .then(res => {
          this.setState({friendsList: res.data})       
          this.props.history.push("/friendsList");
        })
        .catch(err => {
            console.log(err);
        })      
    } 

    UpdateFriend = (props) => {       
      
       // this.props.history.push("/edit");
       
        this.props.history.push({
            pathname: '/edit',
            //search: '?query=abc',
            //state: { detail: response.data }
            //state: props
            state: { props: props }
          })
             
    } 


    render() {

        return (
            <div>
                <h2>Friends List</h2>
                <table>
                   <tbody> 
                        <tr> 
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr> 
                        {this.state.friendsList.map( (friend,index) => (
                        <tr key={index}>
                            <td>{friend.id}</td>
                            <td>{friend.name}</td>
                            <td>{friend.age}</td>
                            <td>{friend.email}</td>
                            <td><input type="button" onClick={()=>this.UpdateFriend(friend)} value="Edit"  /> <input type="button" onClick={()=>this.deleteFriend(friend)} value="Delete"  /></td>
                        </tr> 
                        ))}
                   </tbody>
                </table>
            </div>
        ); 
    }

}

export default FriendsList;