const Child = ({ send }) => {
  return (
    <div>
      <button onClick={() => send("hello from child")}>
        Send Data
      </button>
    </div>
  );
};

export default Child;
