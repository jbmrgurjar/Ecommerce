import  {React,  useContext } from 'react'
import { ThemeData } from '../assets/ThemeContext';

const FoodCart = ({obj}) => {
let {name,image,rating ,tags}=obj;

let{theme}=useContext(ThemeData)
let light="card bg-base-100 w-80 h-96 shadow-xl mx-3 mt-7"
let dark="card bg-black text-white w-80 h-96 shadow-xl mx-3 mt-7"
    
  return (


    // <div>

<div className={theme=="Light"?light:dark}>
  <figure className='h-3/6 w-full'>
    <img className='w-full h-full'
      src={image}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{rating}</div>
    </h2>
  
   
    
    <div className="card-actions justify-end">
        {
            tags.map((ele)=>{
                return <div className='badge badge-outline'>{ele} </div>
            })
        }

    </div>
  </div>
  <div className="card-actions justify-center mb-6">
      <button className="btn btn-primary"> Views Recipes </button>
    </div>

</div>
    // </div>
  )
}

export default FoodCart









