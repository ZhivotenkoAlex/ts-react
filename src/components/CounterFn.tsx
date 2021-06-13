import React, { useState } from 'react';
import './Counter.css';


//we must to assign an optional props manually 
interface Props {
  initialValue?: number;
  step?: number;
}

// the first method to explicitly set the interface
//const Counter:React.FC<Props> = ({ initialValue = 0, step = 1 }) => {
//React.FC it`s a generic of interface


//the second metod is a set the interface in props. This is a more comfortable method
const Counter:React.FC<Props> = ({ initialValue = 0, step = 1 }:Props) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue(value => value + step);

  const decrement = () => setValue(value => value - step);

  return (
    <div className="Counter">
      <span className="Counter__value">{value}</span>

      <div className="Counter__controls">
        <button type="button" onClick={increment}>
          Увеличить на {step}
        </button>
        <button type="button" onClick={decrement}>
          Уменьшить на {step}
        </button>
      </div>
    </div>
  );
};

export default Counter;