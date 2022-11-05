import { useReducer, useEffect } from "react";

function ReducerCounter() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  }, []);
  
  const ACTIONS = {
    INCREASE: "increase",
    DECREASE: "decrease",
    RESET: "reset",
    SET_VALUE: "setValue",
  };
  function setValue(value, count) {
    let num = Number(value);
    if (String(num) === "NaN" || value === "") {
      return count;
    }
    return num;
  }
  function reducer(count, action) {
    switch (action.type) {
      case ACTIONS.SET_VALUE:
        return setValue(action.payload, count);
      case ACTIONS.INCREASE:
        return ++count;
      case ACTIONS.DECREASE:
        return --count;
      case ACTIONS.RESET:
        return 0;
      default:
        return count;
    }
  }
  function inputHandler(e) {
    dispatch({
      type: ACTIONS.SET_VALUE,
      payload: e.target.value,
      elem: e.target,
    })
  }
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="counter">
      <h1>UseReducer Counter</h1>
      <div>
        <input
          type="text"
          placeholder="set counter value"
          onChange={inputHandler}
          onBlur={(e) => {
            e.target.value = "";
          }}
        />
        <h2 className="count-num">Count : {count}</h2>
        <div className="buttons-wrapper">
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.INCREASE });
            }}
          >
            INCREASE
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.DECREASE });
            }}
          >
            DECREASE
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.RESET });
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReducerCounter;

/*

Setup a custom counter hook with increment, decrement, reset, 
setValue functions with a valid UI and Implement a combination 
of states with a useReducer that implements a counter with the 
four evident features in the custom hook -  increment, 
decrement, reset, setValue. Implement a page for the 
custom hook, useReducer, 404, and a page to test error 
boundary and good SEO.

*/
