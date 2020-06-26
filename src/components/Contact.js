import React, { Component } from 'react';
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Contact extends Component {
    state = {
        value: 'kadirumac49@gmail.com',
        copied: false,
      };
    render() {
        return (
            <Social>
                <div className="container">
                    <div className="row">      
                        <div className="col-lg-5 col-md-8 col-sm-10  mt-5 pt-3 mx-auto card" bg="info">
                            <h5 className="text-capitalize text-center text-light">my social media</h5>
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
                            <h5 className="text-capitalize text-center text-light">Send Me Email</h5>
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
                     <div className="col-lg-5 col-md-8 col-sm-10  my-5 py-5 mx-auto card" bg="info">
                        <h5 className="text-capitalize text-center text-light ">my address</h5>
                        <ul> 
                            <li className=" adress p-2">
                        
                                   42477, Radevormwald
                                    Germany
                            </li>
                            <li className=" tel p-2">
                                <strong>Tel.: +(49) 0179 432 6998</strong>
                            </li>
                       </ul>
                        </div> 
                    </div>

                </div>
                </Social>
        );
    }
}

export default Contact;

const Social = styled.div`
a{
    color:#454646;
}
.card{
    background:#333;


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