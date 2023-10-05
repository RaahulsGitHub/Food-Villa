import { CDN_IMG_URL } from "./config";

const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating})=>{
    return(
    <div className="restaurant-card">
        <img src={CDN_IMG_URL+cloudinaryImageId} alt="Card Thumbnail" />
        <h2>{name}</h2>
        <h4>Cusines:{cuisines.join(", ")}</h4>
        <h4>Rating:{avgRating} stars</h4>
    </div>
    )
}

export default RestaurantCard;