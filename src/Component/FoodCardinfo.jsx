import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import SimmerUIProjectinfo from "./SimmerUIProjectinfo";
import { ThemeData } from "../assets/ThemeContext";
const FoodCardinfo = () => {
  const [obj, setObj] = useState(null);
  let { id } = useParams();
  let { theme } = useContext(ThemeData);
  let getdata = async () => {
    let data = await fetch(`https://dummyjson.com/recipes/${id}`);
    let object = await data.json();
    console.log(object);
    setObj(object);
  };

  useEffect(() => {
    getdata();
  }, [id]);
  if (obj == null) {
    return <SimmerUIProjectinfo />;
  }
  let { name, image, rating, mealType, instructions, ingredients } = obj;

  let light = "w-full h-full bg-white flex justify-center pt-10";
  let dark = "w-full h-full bg-black text-white flex justify-center pt-10";
  let light1 =
    "w-full h-[50%]  card  card-side  bg-blue-100 mb-14 mx-10  shadow-lg";
  let dark1 =
    "w-full h-[50%]  card  card-side  bg-black text-white mb-14 mx-10 shadow-lg";
  return (
    <div className={theme == "Light" ? light : dark}>
      <div className={theme == "Light" ? light1 : dark1}>
        <figure className="m-5 w-[60%]">
          <img className="h-80 w-full rounded-xl" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <div className="badge bg-amber-200 text-black ">Rating: {rating}</div>
          <div className="flex">
            {ingredients.map((ele, idx) => {
              return (
                <div key={idx} className=" text-yellow-500">
                  {" "}
                  {ele}
                </div>
              );
            })}
          </div>

          <div className="div">
            {instructions.map((ele, idx) => {
              return (
                <div key={idx} className=" text-yellow-500">
                  {" "}
                  {ele}
                </div>
              );
            })}
          </div>
          <div className="card-actions flex justify-around">
            <button className="btn btn-primary">{mealType}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardinfo;
