import { h /*, Fragment */ } from "preact";
import { Link } from "preact-router/match";
// import { useContext } from 'preact/hooks';
// import { AuthContext } from "../../context/authContext";

const Header = (/* props */) => {
  // const [state, setState] = useContext(AuthContext);

  return (
    <header id="header">
      <h1>Preact App with Microbundle</h1>
      <nav>
        <Link href="/">Home</Link>
        {/* part of the program {state.isAutenticated ? (
			<Fragment> 
         <Link href="/iot">
          IoT Specifics
        </Link> */}
        <Link href="/basic">Basic Settings</Link>
        <Link href="/wifi">WiFi Settings</Link>
        <Link href="/updates">Updates</Link>
        {/* part of the program </Fragment>):( */}
        <Link href="/login">Login</Link>
        {/* part of the program )} */}
      </nav>
    </header>
  );
};

export default Header;
