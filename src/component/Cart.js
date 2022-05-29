import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {
     // to declaring state using constructor

  render() {
     
    const{products}  = this.props;
    return (
      <div className="cart">
          
          {products.map((product)=>{
              return (
                 <CartItem product={product} key={product.id} IncreaseQtyByOne ={this.props.IncreaseQtyByOne} DecreaseQtyByOne={this.props.DecreaseQtyByOne} DeleteProduct={this.props.DeleteProduct}/>
              )
          })}
 
      </div>
    )
  }
}
