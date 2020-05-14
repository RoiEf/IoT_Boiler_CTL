import { h } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
// import { route } from 'preact-router';
import { AuthContext } from "../../context/authContext";

// import styles from "../style/styles.css";
// import style from "./network/style";

const address = `http://${window.location.hostname}:${80}/network`;

const Network = (/* props */) => {
  const [ssid, updateSSID] = useState("base_iot");
  const [wifiPassword, updatePassword] = useState("");
  const [state, setState] = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.isAutenticated) {
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: state.user,
          password: state.password,
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
    if (state.isAutenticated) {
      console.log("Fetching data Network");
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: state.user,
          password: state.password,
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
  }, [state.isAutenticated, state.user, state.password]);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Network Settings</h1>
      </div>
      <div id="contentBox">
        <h1>Basic Settings</h1>
      </div>
      <div id="contentBox">
        <h1>WiFi Settings</h1>
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
    </div>
  );
};

export default Network;
