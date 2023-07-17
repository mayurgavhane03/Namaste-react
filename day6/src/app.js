




import React from "react";
import ReactDOM, {createRoot}  from "react-dom/client";

// import {Title} from "./components/Title"
// import { restroList } from "./constant";
import {Header} from "./components/Header"
// import { RestroCard } from "./components/restrocard";
import {Footer} from "./components/Footer"
import { Body } from "./components/Body";

/* 
const Header =  () => {
    return (
        <div className="Header">
            <Title/>
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div> 

        </div>
    );
};  */



/* 

const RestroCard = ({name, cuisines, cloudinaryImageId, totalRatingsString,}) => {

    return ( 
        <div className="card">
            <img src= {IMG_CDN_LINK  + cloudinaryImageId }/>

            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3> 
            <h4>{totalRatingsString} stars</h4>
            
        </div>
    );
};

 */



// const Body = () => {
//     return ( 
//         <div className="restro-list">
//             {
//             restroList.map((restaurant) => {
//                 return <RestroCard  {...restaurant.data.data}/>
//             })

//             }
      
//         </div>

//     );
       
// };




/* 

const Footer = () => {
    return <h4>footer</h4>;
};

 */










const AppLayout =  () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

