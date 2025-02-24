import {React, useContext} from 'react'
import { useParams } from "react-router-dom";
import  { ThemeData } from '../assets/ThemeContext'
import { addCart } from '../utility/Store/cartSlice'
import { useDispatch ,useSelector} from "react-redux";

const ProjectCard = ({obj}) => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let cartItems = useSelector((store=> store.cart.items ))
    let{brand,images,category,rating,price,title}=obj
    let {theme}=useContext(ThemeData)
    let isPresentIncart = ()=>{
      let objIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == id );
      return objIdx
    }

    let light="card h-96 bg-gray-200 w-72 shadow-xl mx-3 mt-7"
    let dark="card h-96 bg-gray-500   w-72 shadow-xl mx-3 mt-7"
     let light1="card-body bg-primary rounded-xl h-3/6"
    let dark1="card-body bg-black text-white rounded-xl h-3/6"
  return (
    <div>
        <div className={theme=="Light"?light:dark}>
        { isPresentIncart() !=-1 ?  <p  className="bg-orange-500 rounded-2xl  absolute text-black p-1 top-3 left-3 font-bold"> Added in Cart  </p> : null }
  <figure className='h-3/6 w-full'>
    <img className='w-full h-full'
      src={images[0]}
      alt={category} />
  </figure>
  <div className={theme=="Light"?light1:dark1}>
    <div className='card-title flex justify-around items-center'>
    <h2 className="text-[17px] font-bold">
      {brand}
      <div className="badge text-[9px]  ml-5 ">{category}</div>
      <div className="badge  text-[9px]  ml-1">{rating}</div>
   
    </h2>

    </div>
    <p>
        {title}
    </p>
    
    <div className="card-actions justify-end">
      <p className='text-xl'>${price}</p>
      <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=> dispatch(addCart(obj))}>Add to cart </button>
          </div> 
    </div>
  </div>
</div>
    </div>
  )
}

export default ProjectCard