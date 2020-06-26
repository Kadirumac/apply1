import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

class Project extends Component {
    render() {
        const{id,title,img,type} = this.props.product;
        return (
            <ProjectWrapper className="col-sm-11 mx-auto col-md-9 col-lg-5 my-3">
               <div className="card">
                       
                   <ProductConsumer>
                   
                       {(value) =>{
                         const {url} = value.detailProduct; 
                         return  (    <div className="img-container p-2"
                        onClick={() =>{
                            value.handleDetail(id)
                        }}>
                                           
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <h5 className="text-blue text-center mr-3">{title}</h5>
                        <img  src={img} alt="product" className="card-img-top"/>
                        <div className="overlay"> See Project <p> {title} </p> </div>
              
                    </a>
      
                   
                    </div>)}}
                   
                    </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
         
                        <h5 className="text-blue mb-0">
                            {type}
                         
                        </h5>
                    </div>
                    </div>
            
            </ProjectWrapper>
        );
    }
}

Project.propTypes ={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        type:PropTypes.string
    }).isRequired
}

const ProjectWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 0.5s linear;
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
    
}
.img-container:hover .card-img-top{
    transform:scaleX(1.2);
}
.overlay{
    position:absolute;
    top:1;
    right:0;
    bottom:0;
    left:0;
    padding:0.2rem 0.4rem;
    background:rgba(50, 120, 122,0.6 );
    border:none;
    text-align:center;
    vertical-align: middle; 
    opacity:0.1;
    line-height: 90px;
    color:var(--mainWhite);
    font-size:1.4rem;

    transform:translate(0%,-100%);
    transition:all 0.5s linear;
}
.img-container:hover .overlay{
    transform:translate(0,0);
    opacity:0.8;
}

 
`

export default Project;