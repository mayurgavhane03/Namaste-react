
import React from "react";
import ReactDOM from "react-dom";


const title  = () => {
    <h1 id="title" key="h2">
    Food villains
    </h1>
}

const HeaderComponent =  () => {
    return (
        <div className="">
            <title/>
            <h2> Namaste react functional component</h2>
            <h2>this is a h2</h2>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<NewHeader/>);

//function component are just a normal javascript function
// if also return something


