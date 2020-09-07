// if (process.env.NODE_ENV === "development") {
//   // Must use require here as import statements are only allowed
//   // to exist at the top of a file.
// require("preact/debug");
// }
import "preact/debug";

import { h, render } from "preact";
// import { useState } from "preact/hooks";
import { Router } from "preact-router";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./routes/home";
import Basic from "./routes/basic";
import WiFi from "./routes/wifi";
import Updates from "./routes/updates";
import Admin from "./routes/admin";
import Login from "./routes/login";

import { StateContextProvider } from "./context/stateContext";
// import { BasicContextProvider } from "./context/basicContext";

const App = () => {
  return (
    <StateContextProvider>
      {/* <BasicContextProvider> */}
      <div id="app">
        {/* <Header isAutenticated={isAutenticated} /> */}
        <Header />
        <Router>
          <Home path="/" />
          <Home path="/build" />
          <Basic path="/basic" />
          <WiFi path="/wifi" />
          <Updates path="/updates" />
          <Admin path="/admin" />
          {/* <Login path="/login" updateAuthData={updateAuthData} /> */}
          <Login path="/login" />
        </Router>
        <Footer />
      </div>
      {/* </BasicContextProvider> */}
    </StateContextProvider>
  );
};

render(<App />, window.preact_root);
