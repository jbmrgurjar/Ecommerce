import {React,useState,useEffect, useContext} from 'react'
import FoodCart from './FoodCart';
import SimmerUi from './SimmerUi';
import { ThemeData } from '../assets/ThemeContext';
import { Link } from 'react-router-dom';

import FoodCardinfo from './FoodCardinfo';
const Food = () => {

  let {theme}=useContext(ThemeData)
  const [allData, SetallData] = useState([]);
 
  
  let getdata = async () => {
    let data = await fetch("https://dummyjson.com/recipes");
    let obj = await data.json();
    console.log(obj.recipes);
    SetallData(obj.recipes);
    
  };
  useEffect(() => {
    getdata();
  }, []);

  if(allData.length==0){
    return <SimmerUi></SimmerUi>
  }

  let light="AllCard  bg-white flex flex-wrap justify-around"
  let dark="AllCard bg-black  flex flex-wrap justify-around"
  return (
    <div>
      <div className={theme=="Light"?light:dark}>
      {
        allData.map((obj)=>{
          return (
            <Link to={`/FoodCardinfo/${obj.id}`} key={obj.id}>
              <FoodCart obj={obj} />
            </Link>
          );
        })
      }
     </div>
        
    </div>
  )
}

export default Food