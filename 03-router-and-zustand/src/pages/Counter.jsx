import { useState } from 'react';
import styles from './Counter.module.css'

export default function Counter() {
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
        <div className={styles.container}>
            <p>La cuenta és {value}</p>
            <div className={styles.counter}>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Resetear</button>
            </div>
        </div>
    </>
  );
}