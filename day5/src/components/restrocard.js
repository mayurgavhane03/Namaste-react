


import {IMG_CDN_LINK} from "../constant";



export const RestroCard = ({name, cuisines, cloudinaryImageId, totalRatingsString,}) => {

    return ( 
        <div className="card">
            <img src= {IMG_CDN_LINK  + cloudinaryImageId }/>

            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3> 
            <h4>{totalRatingsString} stars</h4>
            
        </div>
    );
};



