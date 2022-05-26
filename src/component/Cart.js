import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {
     // to declaring state using constructor
     constructor(){
        super();
        // ths.state will be a obejct
        this.state={       // products is a array of the product
            
            products:[{
                title:"Mobile Phone",
                price: 999,
                Qty: 1,
                img: '/',
                id: 1
            },
            {
                title:"Trimmer",
                price: 799,
                Qty: 1,
                img: '/',
                id: 2

            },
            {
                title:"Laptop",
                price: 9999,
                Qty: 2,
                img: '/',
                id: 3

            }
        ]

        }
    }
    handleOnIncrease=(product)=>{
        const{products}  = this.state;
        
        const index = products.indexOf(product);
        products[index].Qty +=1;

        this.setState({
            products: products
          });
    }
    handleOnDecrease=(product)=>{
        const{products}  = this.state;
        
        const index = products.indexOf(product);
        if( products[index].Qty >1){

            products[index].Qty -=1; 
            this.setState({
                products: products
              });
        }
       
    }
    // in delete function we have to delete product whose id will be given as argument of the function
    //filter is a function that filters the elements of array based on some conditions and return a new array of elements , filter takes a function as argument//
    handleOnDelete = (id)=>{
        const{products} = this.state;
       const newArray = products.filter((element)=> element.id!== id);
        this.setState({
            products:newArray
        })
    }
  render() {
     
    const{products}  = this.state;
    return (
      <div className="cart">
          
          {products.map((product)=>{
              return (
                 <CartItem product={product} key={product.id} IncreaseQtyByOne ={this.handleOnIncrease} DecreaseQtyByOne={this.handleOnDecrease} DeleteProduct={this.handleOnDelete}/>
              )
          })}
 
      </div>
    )
  }
}
