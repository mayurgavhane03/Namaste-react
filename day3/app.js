
/**
        header
            = logo
            = Nav Items(rightside)
            = cart
        body
            = search bar 
            = restrolist
                = restrorant card 
                    = image 
                    = Name
                    = rating
                    = cusiness
          
        Footer
            = Links
            = copyrights
            
     */


import React from "react";
import ReactDOM, {createRoot}  from "react-dom/client";


const Title  = () => (
    <a href="/"><h1 className= "logo"> Food Villa</h1></a>
);

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
};

 
const body = () => {
    return (
        <div>
            <h1>hdlfhodhfajhdf</h1>
        </div>

    )
        
   
};

const footer = () => {
    return <h4>footer</h4>;
};




const AppLayout =  () => {
    return (
        <React.Fragment>
            <Header />
            <body />
            <footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);





// To give stling in (inline styling)

/* const steyleobject = {

  backgroundColor: "red",

}
*/


/* 
const jsx = (

    <div style={styleobject}>
        <h1>jsx1</h1>
        <h1>jsx2</h1>
    </div> 

    React.Fragment = we can write 
    <>
        <h1>jsx1</h1>
        <h1>jsx2</h1>
    <> 




)  */
 
 





//function component are just a normal javascript function
// if also return something


