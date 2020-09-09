import { h, Fragment } from "preact";
import { useState } from "preact/hooks"; //  , useEffect, useContext
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
// import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";

const StaticIP = (/* props */) => {
  const [ip1, updateIp1] = useState("");
  const [ip2, updateIp2] = useState("");
  const [ip3, updateIp3] = useState("");
  const [ip4, updateIp4] = useState("");
  const [subnetMask1, updateSubnetMask1] = useState("");
  const [subnetMask2, updateSubnetMask2] = useState("");
  const [subnetMask3, updateSubnetMask3] = useState("");
  const [subnetMask4, updateSubnetMask4] = useState("");
  const [defaultGateway1, updateDefaultGateway1] = useState("");
  const [defaultGateway2, updateDefaultGateway2] = useState("");
  const [defaultGateway3, updateDefaultGateway3] = useState("");
  const [defaultGateway4, updateDefaultGateway4] = useState("");
  const [showSaveBTN, setShowSaveBTN] = useState(false);
  const [successMsg, setSuccsessMsg] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // saveIPData({ /* SSID: ssid, wifiPassword: password */ });
  };

  // useEffect(() => {
  //   console.log("wifi.js get data");
  //   getIPData();
  //   // updateSSID(SSID);
  //   // updatePassword(wifiPassword);
  // }, [/*SSID, wifiPassword*/]);

  return (
    <Fragment>
      <p>Static IP Settings in Client Mode:</p>
      <form onSubmit={onSubmit}>
        <p>
          IP:
            <input
            type="text"
            value={ip1}
            onInput={(e) => { updateIp1(e.target.value);/* onPasswordChange(e.target.value) */ }}
          />
          <input
            type="text"
            value={ip2}
            onInput={(e) => { updateIp2(e.target.value);/* onPasswordChange(e.target.value) */ }}
          />
          <input
            type="text"
            value={ip3}
            onInput={(e) => { updateIp3(e.target.value);/* onPasswordChange(e.target.value) */ }}
          />
          <input
            type="text"
            value={ip4}
            onInput={(e) => { updateIp4(e.target.value);/* onPasswordChange(e.target.value) */ }}
          />
        </p>
        <p>
          Subnet Mask:
            <input
            type="text"
            value={subnetMask1}
            onInput={(e) => { updateSubnetMask1(e.target.value);/* onPassword1Change(e.target.value) */ }}
          />
          <input
            type="text"
            value={subnetMask2}
            onInput={(e) => { updateSubnetMask2(e.target.value);/* onPassword1Change(e.target.value) */ }}
          />
          <input
            type="text"
            value={subnetMask3}
            onInput={(e) => { updateSubnetMask3(e.target.value);/* onPassword1Change(e.target.value) */ }}
          />
          <input
            type="text"
            value={subnetMask4}
            onInput={(e) => { updateSubnetMask4(e.target.value);/* onPassword1Change(e.target.value) */ }}
          />
        </p>
        <p>
          Default Gateway:
            <input
            type="text"
            value={defaultGateway1}
            onInput={(e) => { updateDefaultGateway1(e.target.value);/* onPassword2Change(e.target.value) */ }}
          />
          <input
            type="text"
            value={defaultGateway2}
            onInput={(e) => { updateDefaultGateway2(e.target.value);/* onPassword2Change(e.target.value) */ }}
          />
          <input
            type="text"
            value={defaultGateway3}
            onInput={(e) => { updateDefaultGateway3(e.target.value);/* onPassword2Change(e.target.value) */ }}
          />
          <input
            type="text"
            value={defaultGateway4}
            onInput={(e) => { updateDefaultGateway4(e.target.value);/* onPassword2Change(e.target.value) */ }}
          />
        </p>
        {showSaveBTN && <Save />}
      </form>
    </Fragment>
  );
};

export default StaticIP;
