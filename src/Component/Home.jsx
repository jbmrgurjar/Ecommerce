import {React,useContext} from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import SimmerUi from "./SimmerUi";
import NoProduct from "./NoProduct";
import  { ThemeData } from "../assets/ThemeContext";
import AddedProductInCart from "../utility/Store/AddedProductInCart";
import { useSelector } from "react-redux";

const Home = () => {
  const [allData, SetallData] = useState([]);
  let [showData, SetshowData] = useState([]);
  let [search, SetSearch] = useState("");
  let getdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let obj = await data.json();
    console.log(obj.products);
    SetallData(obj.products);
    SetshowData(obj.products);
  };
  
  let AddedComponent = AddedProductInCart(ProjectCard)
  
  let cartItems = useSelector((store=> store.cart.items ))


  let isPresentIncart = (id)=>{
    let objIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == id );
    return objIdx
  }
  useEffect(() => {
    getdata();
  }, []);

  let HandleTopRating = () => {
    let filteredData = allData.filter((obj) => {
      return obj.rating > 4;
    });
    SetshowData(filteredData);
  };
  let handleCatergy = (category) => {
    let filteredData = allData.filter((obj) => {
      return obj.category == category;
    });
    SetshowData(filteredData);
  };

  let handleSearch = () => {
    let filteredData = allData.filter((obj) => {
      if (obj.brand != undefined) {
        return obj.brand.toLowerCase().includes(search.toLowerCase());
      } else if (search == " ") {
        return true;
      } else {
        return false;
      }
    });

    if (filteredData == 0) {
      let obj = {
        id: "no",
      };

      SetshowData([obj]);
    } else {
      SetshowData(filteredData);
    }
    SetSearch("")
  };
  if (showData.length == 0) {
    return <SimmerUi></SimmerUi>;
  }
  // }else if(showData.length == 1 && showData[0].id == "no"){
  //     return <NoProduct></NoProduct>
  // }
  // console.log(search)
  let {theme}=useContext(ThemeData)
  let light=" min-h-screen w-full bg-white "
  let dark=" min-h-screen w-full bg-black  text-white"

  return (
    <div className={theme=="Light"?light:dark}>
      <div className="sticky z-30 top-16 ">
        <div className="utility flex justify-around   ">
          <button
            onClick={HandleTopRating}
            className="btn btn-sm  btn-outline bg-yellow-100 "
          >
            Top-rating
          </button>
          <button
            onClick={() => handleCatergy("furniture")}
            className="btn btn-sm  btn-outline bg-blue-300 btn-primary"
          >
            Furniture
          </button>
          <div className="search flex ">
            <input 
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                SetSearch(e.target.value);
              }}
              className="input btn-sm  text-black    input-secondary w-full max-w-xs"
            />
            <button
              onClick={handleSearch}
              className="btn btn-sm btn-outline btn-info mx-1"
            >
              Search
            </button>
          </div>
          <button
            onClick={() => handleCatergy("fragrances")}
            className=" btn btn-sm  bg-pink-300 btn-outline btn-secondary"
          >
            Fragrances
          </button>
          <button
            onClick={() => handleCatergy("groceries")}
            className=" btn btn-sm bg-green-200 btn-outline btn-accent"
          >
            Groceries
          </button>
        </div>
      </div>
      <div className="AllCard  flex flex-wrap justify-around ">
        {showData.map((obj) => <>{isPresentIncart(obj.id)!=-1 ?<AddedComponent obj={obj} key={obj.id}></AddedComponent> :  <ProjectCard obj={obj} key={obj.id}></ProjectCard>}</>)}
      </div>
    </div>
  );
};

export default Home;
