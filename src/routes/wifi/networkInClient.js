import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";

const SSIDinSTA = () => {
  const { saveData, SSID_IN_Client, Auth_IN_Client } = useWifi();
  const [ssid, updateSSID] = useState("No Network currently selected");
  const [password, updatePassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("networkInClient.js onSubmit");
    saveData({
      caller: "SSIDinSTA",
      SSID: ssid,
      wifiPassword: password,
    });
  };

  useEffect(() => {
    // console.log("SSIDinAP.js useEffect");
    updateSSID(SSID_IN_Client);
  }, [SSID_IN_Client]);
  useEffect(() => {
    // console.log("SSIDinAP.js useEffect");
    updatePassword(Auth_IN_Client);
  }, [Auth_IN_Client]);

  return (
    <Fragment>
      <p>SSID in Client mode:</p>
      <p>Network SSID:</p>
      <form onSubmit={onSubmit}>
        <p>
          <input
            type="text"
            value={ssid}
            onInput={(e) => updateSSID(e.target.value)}
          />
          {SSID_IN_Client && " | Autentication: "}
          {SSID_IN_Client &&
            (Auth_IN_Client ? <b>"V"</b> : <b>Open Network</b>)}
        </p>
        <p>
          <input
            type="text"
            value={password}
            onInput={(e) => updatePassword(e.target.value)}
          />
          {password === "" &&
            " If Password is left blank, No security will be used for WiFi"}
        </p>
        <Save />
      </form>
    </Fragment>
  );
};

export default SSIDinSTA;
