import { h } from "preact";
// import { useState, useEffect } from "preact/hooks"; //  , useContext
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
// import useWifi from "../../context/useWifi";

// import Save from "../../components/save/save";
// const address = `http://${window.location.hostname}:${80}/network`;

const StaticIP = (/* props */) => {
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
    <p>
      static ip
    </p>
  );
};

export default StaticIP;
