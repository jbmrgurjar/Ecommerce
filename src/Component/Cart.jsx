import React, { useContext } from "react";
import CartRow from "./CartRow";
import { useSelector ,useDispatch} from "react-redux";
import { sortAscending , sortDescending  , clearCart} from "../utility/Store/cartSlice";
import { ThemeData } from "../assets/ThemeContext";

const Cart = () => {
  let cartItems = useSelector((store)=> store.cart.items )
  let dispatch = useDispatch();
  const {theme}=useContext(ThemeData);
  let light="overflow-x-auto px-4 text-black  bg-white"
  let dark="overflow-x-auto px-4 text-white bg-black"
  return (
    <div className=  {theme=="Light"?light:dark}>
      <table className="table">
        <thead className="text-2xl">
          <tr>
            <th> Name </th>
            <th>Rating </th>
            <th><span onClick={()=> dispatch(sortAscending())}>🔼</span> <span>Price</span> <span  onClick={()=> dispatch(sortDescending())}> 🔽</span> </th>
            <th>Quantity </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { cartItems.map((cartObj) =>  <CartRow cartObj={cartObj}></CartRow> )}
          
          
        </tbody>
      </table>
      <button className="btn btn-block btn-primary" onClick={()=> dispatch(clearCart())}>Clear Cart </button>
    </div>
  );
};

export default Cart;
