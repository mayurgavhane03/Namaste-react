






import { RestroCard } from "./restrocard";
import { restroList } from "../constant";
import { restroList } from "../constant";
import React, { useState } from "react";




function FilterData(searchTxt, restroList) {
   return  restroList.filter((restroList ) => restaurant.data.data.name.include(searchTxt)) 


}


export const Body = () => {


    //what is state
    //what is Hooks =>  its nothing but functions
    //what useState
    //why
    //new way to create variable


    //this is how we create local variable in react
    const [searchTxt ,setSearchtext] = useState("")
        // (variable name , setfunction= function to upadate the variable)

        const [restaurant, setRestaurant] = useState("restroList")
    return ( 
       <React.Fragment>
      
            <div className="serach-container"> 
                
            <input 
                 type="text" 
                 className="search-input" 
                 placeholder="Search" 
                 value={searchTxt}  
                 onChange={(e) => { 
                    setSearchtext(e.target.value);
                  }}
                 ></input>

                 <button 
                 className="search-btn"
                 onChange={() => { 
                    //need to filter thedata
                  const data =   FilterData(searchTxt, restaurant);
                    //update the state - restaurants
                    setRestaurant(data)
                    //   filterdata

                    FilterData();
                  }}
                 > Search  </button>
            </div>

           

            <div className="restro-list">
                {
                    restroList.map((restaurant) => {
                        return <RestroCard  {...restaurant.data.data}/>
                    })

                }
            </div>    
            
        </React.Fragment>   

    )
       
}

