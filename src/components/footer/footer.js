import { h } from "preact";
import { useContext } from "preact/hooks";
import { StateContext } from "../../context/stateContext";

const Footer = () => {
  const loca = `${window.location.hostname}`;
  const [state, setState] = useContext(StateContext);
  return (
    <footer id="footer">
      <p>{loca}</p>
      <p>
        {state.auth.isAutenticated ? (
          <p>Logged as: {state.auth.user}</p>
        ) : (
          <p>Not logged in.</p>
        )}
      </p>
    </footer>
  );
};

export default Footer;
