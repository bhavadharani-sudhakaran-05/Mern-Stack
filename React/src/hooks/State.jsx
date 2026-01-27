import { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <h3>Decrement</h3>
        <button onClick={() => setCount(count - 1)}>
            Decrement
            </button>
            

    </div>
  );
};

export default State;
