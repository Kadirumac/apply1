import React, { Component } from 'react';
import Project from './Project';
import Title from './Title';
import {ProductConsumer} from '../context';

class ProjectList extends Component {
 
    render() {
       
        return (
            <React.Fragment>
             <div className="py-5">
                <div className="container">
                   <h1 className="text-uppercase text-center text-secondary">my projects</h1>

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
            </React.Fragment>
        );
    }
}

export default ProjectList;