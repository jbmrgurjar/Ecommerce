import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CallSingleProduct from "../utility/Store/CallSingleProduct";
// import { ThemeData } from "../assets/ThemeContext"
import { ThemeData } from "../assets/ThemeContext";
import { useDispatch ,useSelector} from "react-redux";
import{addCart} from "../utility/Store/cartSlice"




const Projectinfo = () => {
  let { id } = useParams();
  const {theme}=useContext(ThemeData);
  let obj =CallSingleProduct(id);
  let dispatch = useDispatch();

  let cartItems = useSelector((store=> store.cart.items ))


  let isPresentIncart = ()=>{
    let objIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == id );
    return objIdx
  }

  // put shimmer UI
  if (obj == null) return <></>;

  let { thumbnail, title, category, price, rating, stock , meta,description} = obj;
   let light="h-[92vh] w-screen[96vh]  pt-12 bg-white "
  let dark="h-[92vh] w-screen[96vh] pt-12 bg-black  text-white"
  let light1="card card-side bg-white shadow-xl w-1/2 mx-auto "
  let dark1="card card-side bg-black shadow-xl w-1/2 mx-auto "
  return (
    <div  className={theme=="Light"?light:dark}>
   
      <div className={theme=="Light"?light1:dark1}>
      { isPresentIncart() !=-1 ?  <p  className="bg-orange-500 rounded-2xl  absolute text-black p-1 top-3 left-3 font-bold"> Added in Cart  </p> : null }
        <figure>
          <img src={thumbnail} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <button className="btn m-1">
              Price
              <div className="badge badge-secondary">{price}</div>
            </button>
            <button className="btn m-1">
              Rating
              <div className="badge badge-secondary">{rating}</div>
            </button>
            <button className="btn m-1">
              category
              <div className="badge badge-secondary">{category}</div>
            </button>
            <button className="btn m-1">
              Stock
              <div className="badge badge-secondary">{stock}</div>
            </button>
            <div> <img src={ meta.qrCode} alt="QR Code" className="h-14 w-14" /></div>

          </div>
          <div className="pt-4 font-mono">
              <p>{description}</p>
            </div>
          <div className="card-actions justify-end pt-4 font-mono">
            <button className="btn btn-primary" onClick={()=> dispatch(addCart(obj))}>Add to cart </button>
          </div> 
        </div>
      </div>
      
    </div>
    
  );
};

export default Projectinfo;
