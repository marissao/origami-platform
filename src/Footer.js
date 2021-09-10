import { useState } from 'react';
import Link from "./Link";
import CraneFaceLeft from './CraneFaceLeft';

const Footer = () => {
    const [number, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    return (  
        <footer className="Footer">
            <ul>
                <Link numbers={number}/>
                <CraneFaceLeft />
            </ul>
            <p>Software University © 2021</p>
        </footer>
    );
}
 
export default Footer;