import { useState } from 'react';
import Link from "./Link";
import CraneFaceRight from './CraneFaceRight';

const NavBar = () => {
    const [number, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    
    return (
        <nav className="Navigation">
        <ul>
            <CraneFaceRight />
            <Link numbers={number}/>
        </ul>
        </nav>
    );
}
 
export default NavBar;