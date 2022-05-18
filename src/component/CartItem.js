import React, { Component } from 'react'


const style = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: "grey"
    }
};

export default class CartItem extends Component {
    // to declaring state using constructor
    constructor(){
        super();
        // ths.state will be a obejct
        this.state={
            title:"Phone",
            price: 999,
            Qty: 1,
            img: '/'

        }
    }

    IncreaseQty=()=>{
        // console.log("Increase has been clicked" , this.state.Qty);
        this.setState({
            Qty: this.state.Qty+1
        })

        // setState form 2 when prevState is needed
        // this.setState((prevState) =>{
        //     return{
        //         Qty: prevState.Qty +1
        //     }
        // }

    }
  render() {
// Object destructuring
    const{title, price, Qty} = this.state;
    return (
      <div className="cart-item ">
          <div className="left-block">
              <img style={style.image}/>
          </div>
          <div className="right-block">
              <div style={{fontSize: 25}}> {title}</div>
              <div style={{color: '#777'}}> Rs- {price}</div>
              <div style={{color: '#777'}}>Qty: {Qty}</div>
              <div className="cart-item-action">

                <img alt="increase" className="action-icon" onClick={this.IncreaseQty} src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1651898950~hmac=1648bf0a05f56dc28201561e8db5b077"/>
                <img alt="decrease" className="action-icon" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                <img alt="delete" className="action-icon" src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1651899123~hmac=2ef1e1f866dcd7398c91e876eb3cb334"/>

              </div>

          </div>
      </div>
    )
  }
}
