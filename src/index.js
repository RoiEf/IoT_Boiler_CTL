import { h, render } from "../node_modules/preact/src/index.js";
import { useReducer } from "../node_modules/preact/hooks/src/index.js";

const App = () => {
  const [count, increment] = useReducer((c) => c + 1, 0);
  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

render(<App />, window.preact_root);
