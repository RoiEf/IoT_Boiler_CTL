import { h } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
// import { route } from 'preact-router';
import { AuthContext } from "../../context/authContext";
import { BasicContext } from "../../context/basicContext";

import Save from "../../components/save/save";
const address = `http://${window.location.hostname}:${80}/network`;

const Basic = (/* props */) => {
  const [state, setState] = useContext(AuthContext);
  const [bState, setBState] = useContext(BasicContext);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Basic Settings</h1>
      </div>
      <div id="contentBox">
        <h1>WiFi Settings</h1>
      </div>
      <div id="contentBox">
        <h1>LoRa Settings</h1>
      </div>
      <div id="contentBox">
        <h1>LAN Settings</h1>
      </div>
      <div id="contentBox">
        <h1>BlueTooth Settings</h1>
      </div>
      <div id="contentBox">
        <h1>Serial Settings</h1>
      </div>
      <Save />
    </div>
  );
};

export default Basic;
