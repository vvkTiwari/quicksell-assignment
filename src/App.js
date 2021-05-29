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
      <Button  actionText="-" onClickHandler={decrementCountHandler} />
        <input
          name="counter"
          type="number"
          value={count}
          max={ maxVal.toString() }
          onChange={onInputchange}
        />
      <Button actionText="+" onClickHandler={incrementCountHandler} />
    </div>
  );
}

export default App;
