import React, { Component ,createContext} from 'react';
import { listProjects,detailProduct,about,skills,frontEndCodes,backEndCodes,services ,languages} from './data';
const ProductContext = createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state={
        products:[],
        about:about,
        detailProduct:detailProduct,
        modalOpen:false,
        modalProduct:detailProduct,
        backEndCodes:backEndCodes,
        frontEndCodes:frontEndCodes,
        services:services,
        languages:languages,
        skills:skills
      
    }; 
    componentDidMount(){
        this.setProducts();
    }

    setProducts = () =>{
        let tempProducts = [];
        listProjects.forEach(item =>{
            const singleItem ={...item};
            tempProducts =[...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }

    getItem = (id) =>{
        const product = this.state.products.find(item=> item.id === id);
        return product;
    };
    handleDetail = (id) =>{
       const product = this.getItem(id);
       this.setState(()=>{
           return { detailProduct:product}
       })
    }

    openModal =(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{modalProduct:product,modalOpen:true}
        })
    }

 closeModal =()=>{
     this.setState(()=>{
         return{modalOpen:false}
     })
 }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,        
                openModal:this.openModal,
                closeModal:this.closeModal
            }}>
                {this.props.children}    
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export{ ProductProvider, ProductConsumer}
