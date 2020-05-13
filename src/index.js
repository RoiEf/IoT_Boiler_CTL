// if (process.env.NODE_ENV === "development") {
//   // Must use require here as import statements are only allowed
//   // to exist at the top of a file.
//   require("preact/debug");
// }
import { h, render } from "preact";
import { useState } from "preact/hooks";
import { Router } from "preact-router";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./routes/home";
import Network from "./routes/network";
import Updates from "./routes/updates";
import Login from "./routes/login";

const App = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAutenticated, setIsAutenticated] = useState(false);

  const updateAuthData = (obj) => {
    setUser(obj.user);
    setPassword(obj.password);
    setIsAutenticated(true);
  };

  return (
    <div id="app">
      <Header isAutenticated={isAutenticated} />
      <Router>
        <Home
          path="/"
          user={user}
          password={password}
          isAutenticated={isAutenticated}
        />
        <Network
          path="/network"
          user={user}
          password={password}
          isAutenticated={isAutenticated}
        />
        <Updates path="/updates" />
        <Login path="/login" updateAuthData={updateAuthData} />
      </Router>
      <Footer />
    </div>
  );
};

render(<App />, window.preact_root);
