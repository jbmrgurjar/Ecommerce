import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import  { ThemeData } from "../assets/ThemeContext";
import { useDispatch } from "react-redux";

import{addCart} from "../utility/Store/cartSlice";

let ProductCard = ({ obj }) => {
  let { brand,title, thumbnail, rating, price, category, id, } = obj;
  let {theme } = useContext(ThemeData);
  let Navigate = useNavigate();
  let handleClick = () => {
    Navigate(`/projectinfo/${id}`);
  };

  let dispatch = useDispatch();
  let handleAddbtn = (event) => {

    dispatch(addCart(obj));
    
    event.stopPropagation()
  }

  let lightTheme="card bg-base-100 w-80 h-96 shadow-xl mx-3 mt-7"
let darkTheme="card bg-black text-white w-80 h-96 shadow-xl mx-3 mt-7"
  return (
    <div className={theme == "dark" ? darkTheme : lightTheme} onClick={handleClick}>
      
      <figure className="h-3/6 w-full">
        <img
          className="bg-zinc-400 h-full w-full rounded-2xl"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{brand}</h1>
        <h6 className="font-bold" >{title}</h6>

        <div className="card-actions justify-between items-center ">
          <div className="badge badge-secondary bg-green-300">{category}</div>
          <div className="badge badge-secondary bg-green-300">{rating}</div>

          <p className=" p-1"> {price} $</p>
          <button className="bg-blue-600 text-white p-4 rounded-2xl" onClick={handleAddbtn}> Add </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
