import { useState } from 'react';
import Link from "./Link";
const Aside = () => {
    const [number, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    return (  
        <aside className="Aside">
            <ul>
                <Link numbers={number}/>
            </ul>
        </aside>
    );
}
 
export default Aside;