import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { count, changeCount } = useCounter(0);

  return (
    <>
      <h3>Contador con hook</h3>
      <p>{count}</p>
      <button
        className="btn btn-primary me-2"
        onClick={() => {
          changeCount(1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          changeCount(-1);
        }}
      >
        -
      </button>
    </>
  );
};
