import React from "react";
import { useState } from "react";
export default function Counter(props) {
  const [count, setCount] = useState(0);

  const Increament = () => {
    setCount(count + props.diff);
  };
  const Decreament = () => {
    setCount(count - props.diff);
  };

  return (
    <div>
      Count:{count}
      <div>
        <button onClick={Increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
      </div>
    </div>
  );
}
