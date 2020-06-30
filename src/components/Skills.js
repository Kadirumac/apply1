import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import {ProgressBar,Badge} from 'react-bootstrap';

class Skills extends Component {
    render() {
        const{id,title,ratio,variant,text,head,img} = this.props.skill;
       

        return (
       
            <ProjectWrapper className="col-12 my-3">
                     <ProductConsumer>
                    {(value) =>{
                        return(
                            <div className="py-1 skills">
                            <div className="container">
                            <div className="row">
                                    <h3 className="head ">{head}</h3>
                                 <div className="col-10">      
                                    <h6 className="html">
                                    {title}
                         {this.props.logo ?  <img src={img} className="logo" alt="skills" ></img> : '' }                                 
                                             
                                    </h6>
                              {this.props.label ?   <ProgressBar className="my-1" 
                                label={`${text} degree`}
                                variant={variant} style={{background:'#9690904f'}}  now={ratio} /> :null}
                                </div>  
                             </div>
                             </div>       
                      </div>  
                      
                        ) 
                    }}
                                    
                       </ProductConsumer>            
            </ProjectWrapper>
         
        );
    }
}

Skills.propTypes ={
    skill:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        text:PropTypes.string,
        ratio:PropTypes.number,
        variant:PropTypes.string
    }).isRequired
}

const ProjectWrapper = styled.div`
.head{
    color:#000
}
.html{
.color:#464545;
text-align: start
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
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
      }
.card-footer{
    background:rgba(247,247,247)
}
}

.logo{
    height:40px;
    width:40px
}

.img-container{
    position:relative;
    overflow:hidden;
}
.car-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.overlay{
    position:absolute;
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
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition:all 0.5s linear;
}
.img-container:hover .overlay{
    transform:translate(0,0);
}
.overlay:hover{
    color:var(--mainBlue);
    cursor:pointer;
}

 
`

export default Skills;