import { useState } from 'react';
import Link from "./Link";

const NavBar = () => {
    const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    
    return (
        <nav className="Navigation">
        <Link nums={nums}/>
        </nav>
    );
}
 
export default NavBar;