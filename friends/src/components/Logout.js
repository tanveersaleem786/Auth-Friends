import React from "react";

// class Logout extends React.Component
// {
  
//    logout = () => {       
//            this.props.history.push("/friendsList");  
               
//    }
// }

const Logout = (props) => {
  localStorage.removeItem('token');  
  props.history.push("/login"); 
  return(
    <div> 
    {localStorage.removeItem('token')}
    </div> 
  );
}
export default Logout;
