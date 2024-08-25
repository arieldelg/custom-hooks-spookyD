import { useState } from "react";

const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);
  const incrementar = (value = 1) => {
    setCounter((prev) => prev + value);
  };
  const restar = (value = 1) => {
    if (counter === 0) return;
    setCounter((prev) => prev - value);
  };
  const resetear = () => {
    setCounter(initialValue);
  };
  return {
    counter,
    incrementar,
    restar,
    resetear,
  };
};

export { useCounter };
