import React from "react";
import { useSelector, useStore, useDispatch } from "react-redux";
import { store } from "..";
import { formatter } from "../assets/constant";
import { AiFillHeart } from "react-icons/ai";
import '../styles/index.css'
import { act_listCart } from "../actions";
import Toastify from "toastify-js";
export default function Product() {
  const products = useSelector((state) => state.products);
  const dispatch=useDispatch();
  const handleBuy=(index)=>{
  // console.log("index",products[index]);
  // Lưu vào store
  Toastify({
    text: "Add product Success !!",
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
   dispatch((act_listCart(products[index])))
  }  
  const element = products.map((products, index) => {
    return (
      <div className="col-3" key={index}>
        <div className="card-sl">
          <div className="card-image">
            <img src={products.img} />
            <a className="card-action" href="#">
              <AiFillHeart className="icon_card" />          
            </a>
            <div className="card-heading">{products.name}</div>
            <div className="card-text">
            Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that
            was launched in 2018.
          </div>
          <div className="card-text">{formatter.format(products.price)}</div>
          <button className="card-button" onClick={()=>handleBuy(index)}>Mua</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{element}</div>

    </div>
  );
}
