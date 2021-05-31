import React, { useState } from "react";

import './App.css';
import Button from './components/Button';

const App = () => {
    // default state of count is set to 1.
    const [count, setCount] = useState(1);
    const maxVal = 1000;

    // Function handles counter increment
    const incrementCountHandler = () => {
      if (count < maxVal) {
        setCount(count + 1);
      }
    }
    
    // Function handles counter decrement
    const decrementCountHandler = () => {
      setCount(count - 1);
      // console.log('count-', count);
    }

    // Function handles input change event
    const onInputchange = (event) => {
      setCount(event.target.value);
      // console.log('countc', count);
    }

    return (
    <div className="App">
      <div className="Container">
        <Button  actionText="-" onClickHandler={decrementCountHandler} classes="Button BtnLeft" />
          <input
            name="counter"
            type="number"
            value={count}
            max={ maxVal.toString() }
            onChange={onInputchange}
          />
        <Button actionText="+" onClickHandler={incrementCountHandler} classes="Button BtnRight" />
      </div>
    </div>
  );
}

export default App;
