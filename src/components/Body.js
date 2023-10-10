
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchInput, restaurants){
    const filterData = restaurants.filter((restaurant)=>
       restaurant.info.name.toLowerCase().includes(searchInput)
    );
  

    return filterData;
}

const Body = ()=>{

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
   
        useEffect(()=>{
            getRestaurnts();
        },[]);

        async function getRestaurnts(){
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4950598&lng=73.8294085&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();

            setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        }
    
            if(!allRestaurants) return null;

           
            
            return (allRestaurants?.length === 0)?<Shimmer/>:(
                <>

        <div className="search-container">
            <input type="text"
             className="search-input"
             placeholder="Search"
             value={searchInput}
             onChange={(e)=>{
                 setSearchInput(e.target.value)
                }}
                />

             <button className="search-btn"
                     onClick={()=>{
                        const data = filterData(searchInput, allRestaurants);
                        setFilteredRestaurants(data);
                     
                     }}>Search</button>
             
        </div>
        {(filteredRestaurants?.length === 0)
                ?<h1>No Restaurans Found....</h1>:
        <div className="restaurant-list">
                     
        {
            
            filteredRestaurants.map((restaurant)=>{
                return(  
                    <Link to={"/restaurant/"+restaurant.info.id}>
                <RestaurantCard key ={restaurant.info.id} {...restaurant.info} />
                </Link>
                )
            })    
        }
        </div>
        
        }

        </>
    )
}




export default Body;