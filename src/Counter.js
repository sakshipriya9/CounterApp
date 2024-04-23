import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
