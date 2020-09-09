import { h } from "preact";
// import { useState, useEffect } from "preact/hooks"; //  , useContext
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
// import useWifi from "../../context/useWifi";

// import Save from "../../components/save/save";
// const address = `http://${window.location.hostname}:${80}/network`;
import UseDhcp from "./dhcp";
import StaticIP from "./staticIP";

const WiFiClientSettings = (/* props */) => {
  // const [dhcp, dhcpToggle] = useState(true);
  // const { getIPData, saveIPData } = useWifi();
  // const [ssid, updateSSID] = useState("base_iot");
  // const [password, updatePassword] = useState("");
  // const [state, setState] = useContext(StateContext);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   saveIPData({ /* SSID: ssid, wifiPassword: password */ });
  // };

  // useEffect(() => {
  //   console.log("wifi.js get data");
  //   getIPData();
  //   // updateSSID(SSID);
  //   // updatePassword(wifiPassword);
  // }, [/*SSID, wifiPassword*/]);

  return (
    <div id="contentBox">
      <h1>Client Mode Settings</h1>
      {/* dhcp or static */}
      <UseDhcp />
      {/* static ip */}
      <StaticIP />
    </div>
  );
};

export default WiFiClientSettings;
