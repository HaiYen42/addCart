import React from 'react'
import { useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { formatter } from '../assets/constant/index.js';
import '../styles/index.css'
import { useDispatch } from 'react-redux';
import { act_addQuantity, act_minusQuantity, act_delete,act_buy } from '../actions/index.js';
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const dispatch= useDispatch();
  let totalPrice=0;
  const listCart= useSelector((state)=>state.cart.cartAr)
  let navigation = useNavigate();
  //Mua sản phẩm
  const handleBuyCart=()=>{
    if (listCart.length>0) {
      dispatch(act_buy([]));
      Toastify({
        text: "Buy product Success !!",
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      return;
    }else{
      Toastify({
        text: "Not product in cart, please put to your cart !!",
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      navigation({
      pathname: "/products",
    });
    }
  } 
  //Xóa sản phẩm
  const handleDeleteCart=(value)=>{
    Toastify({
      text: "Delete product Success !!",
      gravity: "top",
      position: "right",
      style: {
        background: "red",
      },
    }).showToast();
    dispatch(act_delete(value));
  }
  //Thêm sản phẩm
  const handleAddQuantity =(value)=>{
    Toastify({
      text: "Add product Success !!",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    dispatch(act_addQuantity(value));
  } 
  //Giảm sản phẩm
  const handleMinusQuantity=(value)=>{
    Toastify({
      text: "Minus product Success !!",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    dispatch(act_minusQuantity(value));
  }
// List sản phẩm
  const element = listCart.map((products, index)=>{
    totalPrice += products.totalAmount;
    return (
     <tbody>
      <tr>
        <td className="table_data">{index +1}</td>
        <td className="table_data"><img className="imgCart" src={products.img} /></td>
        <td className="table_data">{products.name}</td>
        <td className="table_data">
              <GrFormAdd
                className="add_quantity"
                onClick={()=>handleAddQuantity(products.id)}
              />
              {products.qty}
              <AiOutlineMinus
                className="minus_quantity"
                onClick={()=>handleMinusQuantity(products.id)}
              />
            </td>
       <td  className="table_data">{formatter.format(products.price)}</td> 
       <td  className="table_data">{formatter.format(products.totalAmount)}</td> 
       <td  className="table_data">
       <AiFillDelete
              className="table_delete"
              onClick={()=>handleDeleteCart(products.id)}
            />
        </td> 
      </tr>
     </tbody>
    )
  })
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="table_header">ID</th>
            <th className="table_header">Image</th>
            <th className="table_header">Name Product</th>
            <th className="table_header">Quantity</th>
            <th className="table_header">Price</th>
            <th className="table_header">Sub Price</th>
            <th className="table_header">Action</th>
          </tr>
        </thead>
        {element}
      </table>
      <div>
        Total Price: {formatter.format(totalPrice)}{" "}
        <button className="btn_buy"
         onClick={handleBuyCart}>
          Mua
        </button>
      </div>
    </div>
  );
}
