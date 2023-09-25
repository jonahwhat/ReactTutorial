// import {MouseEvent} from "react";
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {
    // use function to tell react that selectedIndex is within the scope
    // hook!
    const [selectedIndex, setSelectedIndex] = useState(-1)

    // items = [];

    // using a function (that can take parameters) to conditionally render ListGroup
    function getMessage() {
        return (items.length == 0 ? <p>No items found</p> : null)
    }

    // basically a function i think idk (anonymous function)
    // const handleClick = (event: MouseEvent) => console.log(event.altKey)

    return (
        <>
          <h1>{heading}</h1>  
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={item} className={selectedIndex == index ? 'list-group-item active' : 'list-group-item'} onClick={() => {setSelectedIndex(index)}}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
