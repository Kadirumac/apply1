import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

class Services extends Component {
    render() {
        const{id,title,service,img,head} = this.props.service;
        return (
            <ProjectWrapper className="col-lg-6 col-md-11 col-sm-11 d-inline-block mt-5">
                        <h2 className="text-capitalize head  text-center">{head}</h2>
                 <h4 className="text-center text-blue cardTitle">{title}</h4>
               <div className="card">
              
                   <ProductConsumer>
                       {(value) =>( <div className="img-container">            
                        <img  src={img} alt="services" className="card-img-top"/>                
                     </div>)}
                   
                    </ProductConsumer>

          
                    </div>
                    <h5 className="text-capitalize text-center subTitle py-2">{service}  </h5>
            
            </ProjectWrapper>
        );
    }
}

Services.propTypes ={
    service:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        service:PropTypes.string
    }).isRequired
}

const ProjectWrapper = styled.div`
.head{
    color:var(--mainBlue);
}
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 0.5s linear;
}
.cardTitle{
    margin-top:30px;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
      }
.card-footer{
    background:rgba(247,247,247)
}
}

.img-container{
  
    position:relative;
    overflow:hidden;

}
.car-img-top{
    transition:all 1s linear;
    opacity:0.5;
  

}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.overlay{
    position:relative;
    top:0;
    right:0;
    bottom:0;
    left:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    text-align:center;
    vertical-align: middle;
    opacity:0.8;
    line-height: 90px;
    color:var(--mainWhite);
    font-size:1.4rem;
    transform:translate(0%,60%);
    transition:all 0.5s linear;
}
.img-container:hover .overlay{
    transform:translate(0,0);
    line-height: 65px;
}
.overlay:hover{
    color:var(--mainBlue);
    cursor:pointer;
}

.subTitle{
    color:grey
}
 
`

export default Services;