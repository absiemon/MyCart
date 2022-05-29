import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyCart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          </button>
          <div>
          
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png" alt="cart-icon" style={{ height: '40px', width: '40px' }}/>
            <div style={style.circle}>{this.props.count}</div>
          </div>
        </div>
      </nav>
      </>
    )
    
  }
  
}

const style ={
  circle : {
    width: 34,
    height: 34,
    background: '#fff',
    borderRadius: '3 solid #000',
    color: '#000',
    textAlign: 'center',
    font: '32px Arial, sans-serif',
    margin: '-47px 29px 20px',
    position: 'absolute',
    borderRadius: '20px',
    

  }
}
