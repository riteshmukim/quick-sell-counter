import { number } from "prop-types";

import useCounter from "../../hooks/useCounter";
import CounterComponent from "./CounterComponent";

const Counter = ({ initialValue = 1, max = 1000 }) => {
  const [state, dispatch] = useCounter({ count: initialValue, max });

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleAbsolute = e =>
    dispatch({ type: "absolute", value: e.target.value });

  return (
    <CounterComponent
      value={state.count}
      max={state.max}
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
      handleAbsolute={handleAbsolute}
    />
  );
};

Counter.propTypes = {
  initialValue: number,
  max: number,
};

export default Counter;
