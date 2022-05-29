import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {
     // to declaring state using constructor
    
  render() {
    const deliveryCharge = 99;
    const{products}  = this.props;
    return (
        <div className="d-flex flex-row">
            <div className="cart mx-2" style={{backgroundColor:'white', borderRadius: '5px', width: '65%'}}>
                {products.map((product)=>{
                    return (
                        <CartItem product={product} key={product.id} IncreaseQtyByOne ={this.props.IncreaseQtyByOne} DecreaseQtyByOne={this.props.DecreaseQtyByOne} DeleteProduct={this.props.DeleteProduct}/>
                    )
                })}
        
            </div>
            <div className="mx-3 p-3" style={{height: '400px', width: '30%' ,backgroundColor:'white' , borderRadius: '5px'}}> 
                <p className="h5 ">Price: <span>₹{this.props.TotalPrice}</span></p>
                <p className="h5 my-4">Discount: <span style={{color:'green'}}>- ₹{this.props.TotalDiscount}</span></p>
                <p className="h5 my-4">Delivery Charge:  <span> ₹{deliveryCharge}</span></p>
                <p className="h5 my-4" >Packaging Fee: <span>₹{deliveryCharge}</span></p>

                <p className="h4 my-5">Total Amount: <span>₹{this.props.TotalPrice - this.props.TotalDiscount + 2*deliveryCharge}</span></p>
             </div>
      
      </div>
    )
  }
}
