import React from 'react';
import { NavLink } from 'react-router-dom';

/** Import assets */
import './topNav.css';

class TopNav extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {
        currentPage:"home"
      }
  }
  render_item(name){
    if(name == "home" && this.state.currentPage == "home")
    {
       return "label active"
    } else if ( name == "exercise" && this.state.currentPage == "exercise")
    {
       return "label active"
    } else if (name == "food" && this.state.currentPage == "food")
    {
        return "label active"
    }else if( name == "supplements" && this.state.currentPage == "supplements"){
        return "label active"
    } else{
      return "label"
    }
  }
  render() {
    // const { name } = this.props.currentUser;
    return (
       <div className = "topnav">
           <div className = "nav-item">
              <NavLink
                activeClassName="active"
                to={'/home'}
              >
                <div onClick = {()=>{
                 this.setState({
                   currentPage:"home"
                 })
               }} className = {this.render_item("home")}>HOME</div>
              </NavLink>
           </div>
           <div className = "nav-item">
              <NavLink
                activeClassName="active"
                to={'/exercise'}
              >
               <div onClick = {()=>{
                 this.setState({
                   currentPage:"exercise"
                 })
               }} className = {this.render_item("exercise")}>WORKOUT PROGRAMS</div>
              </NavLink>
           </div>
           <div className = "nav-item">
              <NavLink
                activeClassName="active"
                to={'/food'}
              >
                <div onClick = {()=>{
                 this.setState({
                   currentPage:"food"
                 })
               }}className = {this.render_item("food")}>FOOD</div>
              </NavLink>
           </div>
           <div className = "nav-item">
              <NavLink
                activeClassName="active"
                to={'/supplements'}
              >
               <div onClick = {()=>{
                 this.setState({
                   currentPage:"supplements"
                 })
               }}className = {this.render_item("supplements")}>SUPPLEMENTS</div>
              </NavLink>
           </div>
          
       </div>
    );
  }
}

export default TopNav
