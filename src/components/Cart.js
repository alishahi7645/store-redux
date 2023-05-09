import React from "react";
import Navbar from "./Navbar";
import { Data } from "../data";
import formatCurrency from "../util";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="cart-item-text">
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <h5>قیمت: {formatCurrency(item.price)}</h5>
                  <h5>مجموع: {formatCurrency(item.price * item.quantity)}</h5>
                  <button onClick={()=> dispatch({type: 'REMOVE', payload: item})}>حذف از سبد</button>
                </div>
                <div className="add-to-cart">
                  <button onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>
                  <span>تعداد : {item.quantity}</span>
                  <button onClick={() => {
                    if(item.quantity > 1){
                      dispatch({ type: "DECREASE", payload: item })
                    }else{
                      dispatch({ type: "REMOVE", payload: item })
                    }
                  }}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
