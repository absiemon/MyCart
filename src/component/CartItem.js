import React, { Component } from 'react'

const style = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        // backgroundColor: "grey"
    }
};

export default class CartItem extends Component {
   


        // setState form 2 when prevState is needed
        // this.setState((prevState) =>{
        //     return{
        //         Qty: prevState.Qty +1
        //     }
        // }


 
  render() {  
// Object destructuring 
    const{title, price, Qty} = this.props.product;
    return (
      <div className="cart-item ">
          <div className="left-block">
              <img style={style.image} src={this.props.product.img}/>
          </div>
          <div className="right-block">
              <div style={{fontSize: 25}}> {title}</div>
              <div style={{color: '#777'}}> Rs- {price}</div>
              <div style={{color: '#777'}}>Qty: {Qty}</div>
              <div className="cart-item-action">

                <img alt="increase" className="action-icon" onClick={()=> this.props.IncreaseQtyByOne(this.props.product)} src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                <img alt="decrease" className="action-icon" onClick={()=> this.props.DecreaseQtyByOne(this.props.product)} src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                <img alt="delete" className="action-icon"   onClick={()=> this.props.DeleteProduct  (this.props.product.id)} src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>

              </div>

          </div>
      </div>
    )
  }
}
