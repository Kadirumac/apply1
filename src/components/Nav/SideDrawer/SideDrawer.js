import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css'


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if(props.show){
         drawerClasses = 'side-drawer open';
    }

    return (
    <div>
        <div className={drawerClasses}>
            <span  > </span>
  
           
            <a onClick={props.click} href="#projects" className="bigA">Projects</a>
            <a onClick={props.click} href="#contact"className="bigA">Contact</a>
            <a onClick={props.click} href="#home">Home</a>
            
                      
        </div>
        <div style={{paddingLeft:'16px'}}></div>
    </div>
    );
}

export default SideDrawer;
