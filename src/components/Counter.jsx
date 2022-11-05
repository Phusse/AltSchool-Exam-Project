import React from 'react'
import useCounter from "./CustomHooks/useCounter";
import { NavLink } from "react-router-dom";

function Counter() {
  const { count, increase, decrease, reset, setValue } = useCounter(0)
  return (
    <div className="counter">
      <h1>Custom Counter</h1>
      <div>
        <input
          type="text"
          placeholder="set counter value"
          onChange={setValue}
          onBlur={(e) => {
            e.target.value = "";
          }}
        />
        <h2 className="count-num">Count : {count}</h2>
        <div className="buttons-wrapper">
          <button onClick={increase}>INCREASE</button>
          <button onClick={decrease}>DECREASE</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
      <div>
        <NavLink to="/reducerCounter">Go to Reducer Counter</NavLink>
      </div>

    </div>
  )
}
export default Counter;
