import React, { useReducer } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";



const initialState = { count: 0, value: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "addValue":
      return { ...state, count: state.count + parseInt(state.value, 10) };
    case "subtractValue":
      return { ...state, count: state.count - parseInt(state.value, 10) };
    case "setValue":
      return { ...state, value: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error();

    }
};




function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleOnChange = (e) => {
    dispatch({ type: "setValue", payload: e.target.value });
  };

  const handleSubtractValue = () => {
    if (state.value) dispatch({ type: "subtractValue" });
  };

  const handleAddValue = () => {
    if (state.value) dispatch({ type: "addValue" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

    return (
      <section className="container">
        <div className="cover">
        <Navbar/>
        <div className="counterbg">
        <h2>COUNTER</h2>
        <div className="wrapper">
        <button className="left" onClick={handleIncrement}>+</button>
        <div className="input">
            <p>{state.count}</p>
        </div>
        <button className="right" onClick={handleDecrement}>-</button>
        </div>
        <div className="wrapper">
        <button className="leftValue" onClick={handleAddValue}>+ Value</button>
        <input placeholder= 'Set Value' type="text"
              value={state.value}
              onChange={handleOnChange}/>
        <button className="rightValue" onClick={handleSubtractValue}>- Value</button>
        </div>
        <button onClick={handleReset}>RESET</button>

        </div>
        </div>
      </section>
    );
  }
  
  export default Counter;
  