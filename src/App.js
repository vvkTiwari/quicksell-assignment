import React, { useState } from "react";

import './App.css';
import Button from './components/Button';

const App = () => {
    const [count, setCount] = useState(1);
    const maxVal = 1000;

    const incrementCountHandler = () => {
      if (count < maxVal) {
        setCount(count + 1);
      }
    }
    
    const decrementCountHandler = () => {
      setCount(count - 1);
      console.log('count-', count);
    }

    const onInputchange = (event) => {
      setCount(event.target.value);
      console.log('countc', count);
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
