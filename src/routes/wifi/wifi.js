import { h } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
// import { route } from 'preact-router';
import { StateContext } from "../../context/stateContext";

import Save from "../../components/save/save";
const address = `http://${window.location.hostname}:${80}/network`;

const WiFi = (/* props */) => {
  const [ssid, updateSSID] = useState("base_iot");
  const [wifiPassword, updatePassword] = useState("");
  const [state, setState] = useContext(StateContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.auth.isAutenticated) {
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: state.auth.user,
          password: state.auth.password,
          cmd: "update",
          ssid,
          wifiPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("network response: ", res);
        })
        .catch((error) => console.log("something failed", error));
    }
  };

  useEffect(() => {
    if (state.auth.isAutenticated) {
      console.log("Fetching data Network");
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: state.auth.user,
          password: state.auth.password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          updateSSID(res.ssid);
          updatePassword(res.wifiPassword);
          console.log("res: ", res);
        })
        .catch((error) => console.log("something failed", error));
    }
  }, [state.auth.isAutenticated, state.auth.user, state.auth.password]);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>WiFi Settings</h1>
      </div>
      <div id="contentBox">
        <h1>Basic WiFi Settings</h1>
        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              value={ssid}
              onInput={(e) => updateSSID(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={wifiPassword}
              onInput={(e) => updatePassword(e.target.value)}
            />
          </p>
          <p class="submit">
            <input type="submit" name="commit" value="Save" />
          </p>
        </form>
      </div>
      <div id="contentBox">
        <h1>IP Settings</h1>
      </div>
      <Save />
    </div>
  );
};

export default WiFi;
