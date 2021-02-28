import { h } from "preact";
import { useContext } from "preact/hooks";
import { StateContext } from "../../context/stateContext";

import Temprature from "../../components/temprature/temprature";

const Home = (/* props */) => {
  const [state, setState] = useContext(StateContext);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Home</h1>
      </div>
      <div id="contentBox">
        <h1>actual content</h1>
        <p>This is the Home component.</p>
        <Temprature />
        {/* {props.isAutenticated ? <p>Autenticated</p> : <p>Not autenticated</p>} */}
        {state.auth.isAutenticated ? (
          <p>Autenticated</p>
        ) : (
          <p>Not autenticated</p>
        )}
      </div>
    </div>
  );
};

export default Home;
