import { h } from "preact";
import { useState, useEffect } from "preact/hooks"; // , useContext
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
import useWifi from "../../context/useWifi";

import WiFiBasicSettings from "./WiFiBasicSettings";
import WiFiClientSettings from "./WiFiClientSettings";
import Save from "../../components/save/save";
const address = `http://${window.location.hostname}:${80}/network`;

const WiFi = (/* props */) => {
  const { getData, saveData, SSID, wifiPassword } = useWifi();
  const [ssid, updateSSID] = useState("base_iot");
  const [password, updatePassword] = useState("");
  // const [state, setState] = useContext(StateContext);

  const onSubmit = (e) => {
    e.preventDefault();
    saveData({ SSID: ssid, wifiPassword: password });
  };

  useEffect(() => {
    console.log("wifi.js get data");
    getData();
    updateSSID(SSID);
    updatePassword(wifiPassword);
  }, [SSID, wifiPassword]);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>WiFi Settings</h1>
      </div>
      <WiFiBasicSettings />
      {/*
      <div id="contentBox">
        <h1>Basic WiFi Settings</h1>
        <form onSubmit={onSubmit}>
          <p>
            SSID:
            <input
              type="text"
              value={ssid}
              onInput={(e) => updateSSID(e.target.value)}
            />
          </p>
          <p>
            Password:
            <input
              type="text"
              value={password}
              onInput={(e) => updatePassword(e.target.value)}
            />
            {password === "" && ' If Password is left blank, No security will be used for WiFi'}
          </p>
          <Save />
        </form>
      </div>
      */}
      <WiFiClientSettings />
    </div>
  );
};

export default WiFi;
