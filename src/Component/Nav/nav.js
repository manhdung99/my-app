import React from "react";
import './nav.scss'
import {NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { useHistory } from "react-router";

const  Nav = ({updateIsLogin}) => {

  const history = useHistory()
  const handleLogOut = () =>{
    updateIsLogin('false')
    localStorage.setItem('isLogin','false')
    history.push("/my-app/login")
  }

  return (
    <div className="topnav">
      <NavLink to="/my-app/" activeClassName="active" exact ={true}>
        Home
      </NavLink>
      <NavLink to="/my-app/button" activeClassName="active">BUTTON HOVER CSS</NavLink>
      <NavLink to="/my-app/todo" activeClassName="active">Todo List</NavLink>
      <NavLink to="/my-app/post" activeClassName="active">POST</NavLink>
      <NavLink to="/my-app/toast" activeClassName="active">Toast Message</NavLink>

      <div className = "sign-out-btn">
        <span onClick = { () => handleLogOut()}>
        <FontAwesomeIcon icon = {faSignOutAlt} />
        Logout
        </span>
        </div>
    </div>
  );
}
const mapDispatchToProps  = (dispatch) =>{
  return {
      updateIsLogin : (value) => dispatch({type:'UPDATE_LOGIN',payload:value})
  }
}
export default connect(null,mapDispatchToProps) (Nav)


