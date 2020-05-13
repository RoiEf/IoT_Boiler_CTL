import { h } from "preact";

const Home = (props) => {
  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Home</h1>
      </div>
      <div id="contentBox">
        <h1>actual content</h1>
        <p>This is the Home component.</p>
        {props.isAutenticated ? <p>Autenticated</p> : <p>Not autenticated</p>}
      </div>
    </div>
  );
};

export default Home;
