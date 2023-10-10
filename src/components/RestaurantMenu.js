import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "./config";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    [restaurant, setRestaurant] = useState([]);

    const {resId}=useParams();
    
useEffect(()=>{
    getRestaurantInfo()
},[]);

async function getRestaurantInfo(){
    const data = await fetch("https://instafood.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId="+resId);
    const json = await data.json();
    // console.log(json);
    setRestaurant(json);
    // console.log(restaurant)
}

    
    return !restaurant ? (<Shimmer/>)
                        : (
      <div className="restaurant-menu">
            <div className="restaurant-info">
                <img src={CDN_IMG_URL+restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="Restaurant-image" />
                <h1>{restaurant?.data?.cards[0]?.card?.card?.info?.name} </h1>
                <h3>Average Rating: {restaurant?.data?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>City: {restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
                </div>
                <div className="menu-info">
                <h1>Menu</h1>
                    
                        {
                            (restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).map((item)=>{
                                return <h3>{item?.card?.card?.title}</h3>
                            })
                        }
                    
                
            </div>
      </div>  
    );
}

export default RestaurantMenu;