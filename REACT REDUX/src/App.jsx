import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch({ type });
  };
  return (
    <main>
      <div>Counter: {counter}</div>
      <button onClick={() => handleClick("add")}>Add</button>
      <button onClick={() => handleClick("minus")}>Minus</button>
    </main>
  );
};
export default App;
