import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Intro from './pages/Intro'
import ProjectList from './components/ProjectList';
import Details from './components/Details';
import Modal from './components/Modal';
import Default from './components/Default';
import Navbar from './components/Nav/NavBar/NavBar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import Physics from './demos/Physics';

class App extends Component{
  
    render(){
        return (
    
          <React.Fragment>
          <Navbar/>
       
  
          <Switch>          
            <Route exact path="/" component={Home} ></Route>
         
            <Route component={Default}></Route>
          </Switch>
 
            
      </React.Fragment>

        );
    };
 
}
export default App;
