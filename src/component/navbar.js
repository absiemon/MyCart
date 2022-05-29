import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
          
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
    margin: '0px -25px 20px',
    position: 'absolute',
    borderRadius: '20px',
    

  }
}
