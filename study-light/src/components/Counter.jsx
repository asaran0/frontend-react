import React from  "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../redux/counterSlice";
import { useState } from "react";

 const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState(0);

    return (
        <div style={{ padding: 20 }}>
            <h2> Counter value: {count}</h2>
            <button onClick={() => dispatch(increment())} > Increment</button>
            <button onClick={() => dispatch(decrement())} > Decrement</button>
            <button onClick={() => dispatch(reset())} > Reset</button>
            <button onClick={() => dispatch(incrementByAmount(Number(inputVal)))} > Increment by Amount</button>
            <br></br>
            <input type="number"
            style={{padding: 5}}
             value={inputVal}
              onChange={(e) => setInputVal(Number(e.target.value))}
            />
       </div>
    )
}

export default Counter;