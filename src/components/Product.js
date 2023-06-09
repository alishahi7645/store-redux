import React from "react";
import { Link } from "react-router-dom";
import { IoBasketOutline, IoHomeSharp } from "react-icons/io5";
import Navbar from "./Navbar";
import { Data } from "../data";
import formatCurrency from "../util";
import {useSelector , useDispatch} from 'react-redux'
function Product() {
  const cart = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="product-item-text">
                <div className="product-item-info">
                  <h4>{item.title}</h4>
                  <h5>{formatCurrency(item.price)}</h5>
                </div>
                <div className="add-to-cart">
                  <button onClick={()=> dispatch({type:"ADD", payload:item})}>افزودن به سبد خرید</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
