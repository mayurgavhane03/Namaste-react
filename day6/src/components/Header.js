


import {Title} from "./Title"
import { Cart } from "./Cart";

export const Header =  () => {
    return (
        <div className="Header">
            <Title/>
            <div className="nav-items"> 
                <ul>
                    <li><a href="https://www.w3schools.com">Home</a></li>
                    <li><a href="https://www.w3schools.com">About</a></li>
                    <li><a href="https://www.w3schools.com">Contact</a></li>
                    <li><Cart/></li>
                    <li><a href="https://www.w3schools.com">Login</a></li>
                </ul>
            </div>

        </div>
    );
}; 