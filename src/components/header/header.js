import { h, Fragment } from "preact";
import { Link } from "preact-router/match";
import { useContext } from 'preact/hooks';
import { StateContext } from "../../context/stateContext";

// import { AuthContext } from "../../context/authContext";

const Header = (/* props */) => {
  const [state, setState] = useContext(StateContext);

  return (
    <header id="header">
      <h1>Preact App with Microbundle</h1>
      <nav>
        <Link href="/">Home</Link>
        {state.auth.isAutenticated ? (<Fragment>
          {/*  
          <Link href="/iot">IoT Specifics</Link>
          <Link href="/basic">Basic Settings</Link>
         */}
          <Link href="/wifi">WiFi Settings</Link>
          <Link href="/updates">Updates</Link>
          <Link href="/admin">Admin</Link>
        </Fragment>) : (<Link href="/login">Login</Link>)}
      </nav>
    </header>
  );
};

export default Header;
