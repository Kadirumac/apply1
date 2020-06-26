import React, { Component } from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

class NewNav extends Component{
   state = {
     SideDrawerOpen: false
   };

   drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return {SideDrawerOpen: !prevState.SideDrawerOpen}
     });
   };
   

  backdropClickHandler = () => {
   this.setState({SideDrawerOpen: false});
  };

render(){
  let sideDrawer;
  let backdrop;

  if(this.state.SideDrawerOpen){
    backdrop = <Backdrop click={this.backdropClickHandler} />;
  }

  
  return (
    <div style={{height: "0%"}}>      
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.SideDrawerOpen} click={this.backdropClickHandler}/>
      {backdrop}
       <main style={{marginTop: "64px"}}>
       
       </main>
      </div>
  )}
}
export default NewNav;