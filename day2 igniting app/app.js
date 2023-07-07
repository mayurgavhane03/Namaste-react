







/*
cammands

1.  npm init
2. npm install -D parcel   => -D means dev dependency
3. npm install react
4. npm i react-dom
5. npx parcel index.html      npx means exicuting that file
6.

export react

never touch package-lock.json
never touch packgae.json





*/



import React from "react";
import ReactDOM from "react-dom/client"; //it gives a error 

const heading = React.createElement("h1",{
    id:root,
},"write something here");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);




