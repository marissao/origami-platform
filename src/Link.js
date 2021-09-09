const Link = ({nums}) => {
    return (
        <ul>
            <li className="listItem" key="0">
                <img src="blue-origami-bird.png" alt="origami-bird-face-right" />
            </li>
            {nums.map((num) => (
                <li className="listItem" key={num}>
                    <a href="/">Going to {num}</a>
                </li>
            ))}
        </ul>

    );
}
 
export default Link;


