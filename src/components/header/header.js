import { h /*, Fragment */ } from "preact";
import { Link } from "preact-router/match";
// import style from "./style.css";

const Header = (/* props */) => {
  return (
    <header id="header">
      <h1>Preact App with Microbundle</h1>
      <nav>
        <Link href="/">
          Home
        </Link>
        {/* part of the program {props.isAutenticated ? (
			<Fragment> */}
        {/* <Link activeClassName={style.active} href="/iot">
          IoT Specifics
        </Link> */}
        <Link href="/network">
          Network
        </Link>
        <Link href="/updates">
          Updates
        </Link>
        {/* part of the program </Fragment>):( */}
        <Link href="/login">
          Login
        </Link>
        {/* part of the program )} */}
        {/* part of the example <Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link> */}
      </nav>
    </header>
  );
};

export default Header;
