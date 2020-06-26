import React, { Component } from 'react';
import Skills from './Skills';
import Services from './Services';
import Title from './Title';
import {ProductConsumer} from '../context';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import Refraction from '../demos/Refraction';
import Project from './Project';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Wave, Random } from 'react-animated-text';



class Home extends Component {
    state = {
        value: 'kadirumac49@gmail.com',
        copied: false,
      };

    render() {
       
        return (
            <React.Fragment>

                 
                
                <Codes id="home">



                  <ProductConsumer >
               {(value) =>{
                  const {id,img,info,title,type} =
                  value.about;
               
                  return(
                      <div className="container py-3" id="about">
                          {/* title */}
                          <div className="row">
                              <div className="col-10 mx-auto text-center  my-5">
                                <h1>
                                <Wave text={title} iterations='1'  effect="verticalFadeOut" effectChange={1.2}/>
                                </h1>
                                <h2>
                                It makes me happy to have to learn new things throughout life.
                                </h2>
                              </div>
                          </div>
                        {/* end title */}
                        {/* product info */}
                        <div className="row">
                            <div className="mx-auto col-md-6 my-3 ">
                                <img width="300px" height="300px" src={img} className="rounded-circle ml-3 " alt="product"/>
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                               <h3 className="mb-5">I am a traveler of the web development
                                            path, and some principles that brighten my path
                                </h3>                               
                                 <ul className="pt-3" >
                                     <li className="h3">Regular personal development</li>
                                     <li className="h3">Have a clear vision in mind.</li>
                                     <li className="h3">Accept your imperfection and vulnerabilities</li>
                                     <li className="h3">Live With Integrity</li>
                                 </ul>                                      
                       </div>
                        </div>
                      </div>
                  );
                   
               }}
           
           </ProductConsumer>
           <ProductConsumer>
               
                        { (value) =>{ 
                            return value.services.map( service =>{
                                return <Services 
                                 key={service.id }
                                 service = {service}/>})
                        }}                         
             </ProductConsumer>
             
           <div className="py-5" id="projects">
                <div className="container">
                   <h1 className="text-uppercase text-center text-secondary">projects</h1>

                    <div className="row">
                        <ProductConsumer>
                            { (value) =>{
                            return value.products.map( product =>{
                                return <Project
                                 key={product.id }
                                 product = {product}/>
                            })
                                   
                            }}
                        </ProductConsumer>
                    </div>
                </div>
             </div>
           
                <div className="container">       
                     <div className="row">                
                        <h5 className="text-uppercase fs">
                                    <strong >skills that I have been learning...</strong>  
                                </h5>                        
                    </div>
               
               
                        <div className="row">       
                      <div className="col-lg-6 col-md-10 col-sm-11 skills">
                        
                      <ProductConsumer>
                        { (value) =>{
                            return value.frontEndCodes.map( item =>{
                                return <Skills logo
                                 key={item.id }
                                 skill = {item}/>})
                        }}
                        </ProductConsumer>
                      </div>
                      <div className="col-lg-6 col-md-10 col-sm-11 skills">
                        <ProductConsumer>
                        { (value) =>{
                            return value.backEndCodes.map( e =>{
                                return <Skills logo
                                 key={e.id }
                                 skill = {e}/>})
                        }}                         
                        </ProductConsumer>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-11 skills">
                       
                        <ProductConsumer>
                        { (value) =>{
                            return value.languages.map( (skill,index) =>{
                                return(
                                    <div key={index}>
                                 
                                    <Skills label
                                 key={skill.id }
                                 skill = {skill}/>
                                 </div>)})
                        }}                         
                        </ProductConsumer>
                        </div>
                        <div className="mx-auto col-md-6 my-3 ">
                                <img width="350px" height="300px" src={'img/me2.jpg'} className="m-1 p-1 " alt="product"/>
                            </div>
                
                    </div>
                </div>
       
             </Codes>
             <Social >
                <div className="container mb-2" id="contact">
                    <h2 className="text-center">Contact</h2>    
                    <div className="row">  
                        <div className="col-lg-5 col-md-8 col-sm-10  mt-5 pt-3 mx-auto card" bg="info">
                            <ul>
                            <a href="https://www.linkedin.com/in/umackadir/" target="_blank"  rel="noopener noreferrer"><li> <img alt="social media" src={'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png'} className="logo"></img>
                              LinkedIn</li></a>
                              <a href="https://www.xing.com/profile/kadir_umac2/cv" target="_blank"  rel="noopener noreferrer"> <li> <img alt="social media" src={'https://cdn1.iconfinder.com/data/icons/online-social-network-service/96/Asset_29-512.png'} className="logo"></img>
                              Xing</li></a>
                              <a href="https://github.com/kadirumac" target="_blank"  rel="noopener noreferrer"><li> <img alt="social media" src={'https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png'} className="logo"></img>
                            Github</li></a>
                            </ul>

                        </div>
                        <div className="col-lg-5 col-md-8 col-sm-10 col-xs-10 mt-5 pt-3 mx-auto card " bg="info">
                            <h5 className="text-capitalize text-center text-dark">Send Me Email</h5>
                            <ul>
                           <li>
                           <img src={'https://cdn2.iconfinder.com/data/icons/social-media-2151/512/5_Media_social_website_gmail-512.png'} className="logo"></img> 
                            <a href="mailto:kadirumac49@gmail.com">Send Me Email</a>
                           
                           </li>
                            <p className="text-center text-light">or</p>
                      
                         <li> 
                           <img src={'https://cdn2.iconfinder.com/data/icons/line-hero-essentials/32/Essentials_hand_click_point-512.png'} className="logo"></img>
                             <CopyToClipboard text={this.state.value}
                               onCopy={() => this.setState({copied: true})}>
                                 <a  href="#"> <span>Click to copy my email</span></a>
                               </CopyToClipboard>                    
                               
                               {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                             </li>
             
                            </ul>
                         
                        </div>
                   
                    </div>

                </div>
                </Social>
            </React.Fragment>
        );
    }
}

export default Home;

const Codes = styled.div`
.srv{
        font-family:Tenor Sans;
}
.skills{ 
    background: transparent;
    font-family:Tenor Sans;
    margin:4% 0;
    padding:2% 0;

}

.fs{
    color:grey;
    font-family:Tenor Sans;     
}
`



const Social = styled.div`
a{
    color:#454646;
}
.card{
    background:#dbdbdb;


}

.card li{
    list-style-type:none;
    height:60px;
    width:70%;
    margin:5% auto;
    background:#fff;
    border-radius:5px

}
.logo{
    padding:auto;
    margin:5%;
    height:40px;
    width:40px;
    
}

.adress{
    font-family:Domine !important;
    height:auto !important;
}
.tel{
    font-family:Permanent !important;
    height:auto !important;
}
`