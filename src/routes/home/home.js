import { h } from "preact";
import { useContext } from 'preact/hooks';
import { AuthContext } from "../../context/authContext";

const Home = (/* props */) => {
  const [state, setState] = useContext(AuthContext);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Home</h1>
      </div>
      <div id="contentBox">
        <h1>actual content</h1>
        <p>This is the Home component.</p>
        {/* {props.isAutenticated ? <p>Autenticated</p> : <p>Not autenticated</p>} */}
        {state.isAutenticated ? <p>Autenticated</p> : <p>Not autenticated</p>}
      </div>
    </div>
  );
};

export default Home;
