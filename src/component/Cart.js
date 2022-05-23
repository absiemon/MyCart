import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {
     // to declaring state using constructor
     constructor(){
        super();
        // ths.state will be a obejct
        this.state={
            
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
                id: 2

            }
        ]

        }
    }
  render() {
      const{products}  = this.state;
    return (
      <div className="cart">
          
          {products.map((product)=>{
              return (
                 <CartItem product={product} key={product.id}/>
              )
          })}

      </div>
    )
  }
}
