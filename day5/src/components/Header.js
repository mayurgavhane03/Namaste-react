


import {Title} from "./Title"


export const Header =  () => {
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