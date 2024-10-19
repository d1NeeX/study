import React, { useEffect, useState } from 'react';


const MyComponents = (props) => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        document.title = `На значение ${count}`;
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Жми меня
            </button>
        </div>
    );
}

export default MyComponents;