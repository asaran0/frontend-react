import { useState } from 'react';
export default function Category() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Category Page</h1>
            <button onClick={() =>setCount(count +1)}> click me {count}</button>
            <p>This is the category page. Content will be added here later.{count}</p>
        </div>
    );
}