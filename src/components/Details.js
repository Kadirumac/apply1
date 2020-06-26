import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value) =>{
                  const {id,img,info,title,type,url,intro} = value.detailProduct;         
       
                  
                  return(
                      <div className="container py-5">
                          {/* title */}
                        
                        {/* end title */}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img  src={img} className="img-fluid" alt="project"/>
                               
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-1">
                               
                                
                                     <h4 className="text-blue">
                                     </h4>
                                
                                     <InfoWrapper>
                                         <h3>{intro.title}</h3>
                                     <ul className="list">
                                        <li>Project Type : <br/>{type} </li>
                                        <li>Coded with : <br/>{intro.codes}</li>
                                        <li>Technologies used :<br/> {intro.techs}</li>
                                        <li>Start date :<br/>  {intro.start} </li>
                                        <li>Finish date : <br/> {intro.finish}</li>
                                        <li>Desription  :<br/>{intro.intro}</li>
                                    </ul>
                            
                                   
                                     <div>
                                         <Link to="/project">
                                         <ButtonContainer>
                                        Back to Projects     
                                        </ButtonContainer>
                                        </Link>
                              
                                         <ButtonContainer>
                                         <a href={url} rel="noopener noreferrer" target="_blank">  Go to Project Website     </a>
                                        </ButtonContainer>
                                     
                          
                                     </div>
                                     </InfoWrapper>
                                 
                            </div>
                        </div>
                      </div>
                  );
                   
               }}
           </ProductConsumer>
        );
    }
}

export default Details;


const InfoWrapper = styled.div`

.list li{
    color:#464545;
    list-style-type: square;
  
    text-decoration:none;
    font-family:Tenor Sans;
    font-size:1.4em
}
a{
    color:grey;
}

h3{
    font-family:Tenor Sans;
}
`