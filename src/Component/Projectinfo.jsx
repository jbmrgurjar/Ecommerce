import React, { useEffect ,useState ,useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeData } from "../assets/ThemeContext";
import { useDispatch } from "react-redux";
// import useGetProductInfo from "./assets/useGetProductInfo";
import SimmerUIProjectinfo from "./SimmerUIProjectinfo";

const ProductInfo = () => {
     const [obj , setObj ] = useState(null);
     

   
  let{theme}=useContext(ThemeData)

    let {id} = useParams();
    let getdata=( async()=>{
        let data=await fetch (`https://dummyjson.com/products/${id}`);
        let object= await data.json();
        setObj(object)

    })
    useEffect(()=>{
getdata();
    },[])
    let handleClick = () => {
      Navigate(`/product/${id}`);
    };

    let dispatch = useDispatch();
    let handleAddbtn = (event) => {
  
      dispatch(addCart(obj));
      
      event.stopPropagation()
    }
  
   

    if (obj == null){
        return <SimmerUIProjectinfo></SimmerUIProjectinfo>
    }

  let {
    title,
    description,
    category,
    price,
    rating,
    stock,
    tags,
    brand,
    images,
    meta ,
    
  } = obj;

  let light = "w-full h-full bg-white flex justify-center pt-10";
  let dark = "w-full h-full bg-black text-white flex justify-center pt-10";
   
  let light1="w-[60%] h-full  card  card-side  bg-blue-100 mb-14  shadow-lg"
  let dark1="w-[60%] h-full  card  card-side  bg-black text-white mb-14 shadow-lg"
  return (
    <div className={theme=="Light"?light:dark} onClick={handleClick}>
      <div className={theme=="Light"?light1:dark1}>
        <figure className=" m-5  w-[60%] ">
          <img
            src={images[0]}
            alt="Album"
            className="h-full w-full rounded-xl bg-amber-100"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-sm"> {brand}</p>
          <p className="text-xs">{description}</p>

          <div className="badge bg-amber-200 text-black ">Rating: {rating}</div>
          
        
          <div className="badge    bg-slate-200 text-black">Category: {category}
      
          </div>
          {tags.map((ele ,idx) => {
              return <div key={idx} className="badge  bg-lime-300 text-black "> {ele}</div>;
            })}

          <div className="badge border-l-indigo-400 text-black ">Stock : {stock}</div>

          <div className="card-actions flex  justify-between">
            <div className="text-3xl ">Price : {price} $</div>
        
            <div> <img src={ meta.qrCode} alt="QR Code" className="h-14 w-14" /></div>

            <button className="btn btn-primary" onClick={handleAddbtn}>Add</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;