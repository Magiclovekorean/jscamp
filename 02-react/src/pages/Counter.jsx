import { useState } from 'react';

export function Counter() {
  const [value, setValue] = useState(0);

    function increment() {
    setValue(prevCounter=>prevCounter+1);
  }

  function decrement() {
    setValue(prevCounter=>prevCounter-1);
  }

  function reset() {
    setValue(0);
    }               



  return (
    <>
      <p>Count is {value}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
