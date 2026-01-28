import { useState,useEffect } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  const [like,setLike] = useState(0);
 useEffect (()=>{
  console.log("from useEffect");
 },[like])
  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <h3>Likes: {like}</h3>
        <button onClick={() => setLike(like + 1)}>
            Increment
            </button>
    </div>
  );
};

export default State;
