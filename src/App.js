import React from 'react';
import Cart from './component/Cart';
import Navbar from './component/navbar';
class App extends React.Component {

  // to declaring state using constructor
  constructor(){
    super();
    // ths.state will be a obejct
    this.state={       // products is a array of the product
        
        products:[{
            title:"Mobile Phone",
            price: 999,
            discount: 0.1,
            Qty: 1,
            img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id: 1
        },
        {
            title:"Trimmer",
            price: 799,
            discount: 0.1,
            Qty: 1,
            img: 'https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 2

        },
        {
            title:"Laptop",
            price: 9999,
            discount: 0.1,
            Qty: 2,
            img: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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

getCount = ()=>{
  const {products} = this.state;
  let count =0;
  products.forEach((product)=>{
    count += product.Qty
  })

  return count;

}
 getTotalPrice = ()=>{
   const{products}  = this.state;
   let totalPrice =0;
   products.forEach((product)=>{
     totalPrice += product.Qty * product.price;
   }) 

   return totalPrice;
 }
 getDiscount = ()=>{
  const{products}  = this.state;
  let totalDiscount =0;
  products.forEach((product)=>{
    totalDiscount += (product.Qty * product.price) * product.discount;
  }) 

  return totalDiscount.toFixed(2);   // toFixed limit the decimal places 
 }
  render(){

    const {products} = this.state;
    return (
    <div className='App'>
      <Navbar count={this.getCount()}/>
      <div >
      <h4>Cart Items ({this.getCount()})</h4>
        <Cart  products={products}  TotalPrice = {this.getTotalPrice()} TotalDiscount={this.getDiscount()} IncreaseQtyByOne ={this.handleOnIncrease} DecreaseQtyByOne={this.handleOnDecrease} DeleteProduct={this.handleOnDelete}/>
      </div>
      
    </div>
    );
  }
}

export default App;
