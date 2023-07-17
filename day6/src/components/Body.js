






import { RestroCard } from "./restrocard";
import { restroList } from "../constant";
import { restroList } from "../constant";
import React, { useState } from "react";

/* 



export function FilterData(searchText, restaurants) {
  if (!Array.isArray(restaurants)) {
    return []; // Return an empty array or handle the error case appropriately.
  }

  const filteredData = restaurants.filter((restaurant) => {
    const restaurantName = restaurant?.data?.data?.name || ''; // Access the name property safely

    // Perform case-insensitive search by converting both the restaurant name and search text to lowercase
    return restaurantName.toLowerCase().includes(searchText.toLowerCase());
  });

  return filteredData;
}



*/


function FilterData(searchText, restaurants) {


    // console.log(restaurants);
    //const filterData =  restaurants.filter((restaurant) => restaurant.data.data.name.includes(serachText)) 

    const filteredData = restaurants.filter((restaurant) => {
        const restaurantName = restaurant?.data?.data?.name || ''; // Access the name property safely
    
        // Perform case-insensitive search by converting both the restaurant name and search text to lowercase
        return restaurantName.toLowerCase().includes(searchText.toLowerCase());
      });
    
      return filteredData;



    

}


export const Body = () => {
    //what is state
    //what is Hooks =>  its nothing but functions
    //what useState
    //why
    //new way to create variable


    //this is how we create local variable in react
    const [restaurants,setRestaurant] = useState(restroList);
        // (variable name , setfunction= function to upadate the variable)

    const [searchText, setSearchtext] = useState("");

    
    return ( 
       <React.Fragment>
      
            <div className="serach-container"> 
                
            <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search restaurant you want....." 
                    value={searchText}  
                    onChange={(e) => { 
                        setSearchtext(e.target.value);
                    }}
                    />

                    
                    <button  className="search-btn"
                        onClick={()=> {   
                        //need to filter the data
                        const data =   FilterData(searchText, restaurants);
                        //update the state - restaurants
                        setRestaurant(data);
                        //   filterdata

                        FilterData();
                    }}>  Search  </button>
            </div>

           

            <div className="restro-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestroCard  {...restaurant.data.data}  key={restaurant.data.data.id}/>
                    })

                } 
            </div>    
            
        </React.Fragment>   

    )
       
}

