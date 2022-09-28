import React from 'react'
import "./Cart.css"
const Cart = ({cartItems}) => {
  return (
    <div className='cart-items'>
     <div className="cart-items header">
      {cartItems.length===0 && <div>No Items are Added</div>}
     </div>
    </div>
  )
}

export default Cart
