import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";

const SSIDinSTA = () => {
  const {
    saveData,
    SSID_IN_Client,
    Auth_IN_Client,
    SSID_From_Scan,
    Auth_From_Scan,
  } = useWifi();
  const [ssid, updateSSID] = useState("No Network currently selected");
  const [password, updatePassword] = useState("");
  const [ssidFromScan, updateSSIDFromScan] = useState(false);
  const [authFromScan, updateAuthFromScan] = useState(false);

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
    // console.log("SSIDinAP.js useEffect Auth_IN_Client:", Auth_IN_Client);
    // if (Auth_IN_Client === "true" || Auth_IN_Client === "false") {
    //   updatePassword("");
    // } else
    updatePassword(Auth_IN_Client);
  }, [Auth_IN_Client]);
  useEffect(() => {
    // console.log("SSIDinAP.js useEffect");
    updateSSIDFromScan(SSID_From_Scan);
    updateAuthFromScan(Auth_From_Scan);
  }, [SSID_From_Scan, Auth_From_Scan]);

  return (
    <Fragment>
      <p>SSID in Client mode:</p>
      <p>Network SSID:</p>
      <form onSubmit={onSubmit}>
        <p>
          <input
            type="text"
            value={ssid}
            onInput={(e) => {
              updateSSID(e.target.value);
              updateSSIDFromScan(false);
            }}
          />
          {ssid !== "" &&
            (ssidFromScan === false || ssidFromScan === "false") &&
            " | Autentication: "}
          {ssid !== "" &&
            (ssidFromScan === false || ssidFromScan === "false") &&
            (Auth_IN_Client ? <b>"V"</b> : <b>Open Network</b>)}
          {ssid !== "" &&
            (ssidFromScan === true || ssidFromScan === "true") &&
            (authFromScan === false || authFromScan === "false") &&
            " | Autentication: Open Network"}
        </p>
        <p>
          <input
            type="text"
            value={password}
            onInput={(e) => updatePassword(e.target.value)}
          />
          {password === "" &&
          (ssidFromScan === true || ssidFromScan === "true") &&
          (Auth_From_Scan === true || Auth_From_Scan === "true")
            ? "This Network requires Password"
            : ssid !== "" &&
              password === "" &&
              ssidFromScan === false &&
              " If Password is left blank, No security will be used for WiFi"}
        </p>
        <Save />
      </form>
    </Fragment>
  );
};

export default SSIDinSTA;
