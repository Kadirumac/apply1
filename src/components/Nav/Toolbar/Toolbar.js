import React from 'react'
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link} from 'react-router-dom'
import { Wave } from 'react-animated-text';


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">

    
            <div className="spacer">  
         
                        <div className="col-10  my-2 text-title">
                                <p className="text-secondary ku"  >
                                <Wave text="kadir umac"  effect="pop" iterations="10" effectChange={1.2}/>
                                </p>
                         
                        </div>
               
              </div>
            <div className="toolbar_toggle-button">
               <DrawerToggleButton click={props.drawerClickHandler} />   
            </div>
        
             <div className="toolbar_navigation-items ">
                <ul>
                        <li><a href="#home">Home</a></li>
                     
                        <li><a href="#projects" className="bigA">Projects</a></li>
                        <li><a href="#contact"className="bigA">Contact</a></li>
                        
               </ul>
            </div> 

        </nav>
    </header>
)

export default Toolbar; 