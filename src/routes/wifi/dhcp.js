import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks"; //  , useContext
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";
// const address = `http://${window.location.hostname}:${80}/network`;

const UseDhcp = (/* props */) => {
  const { saveDHCP, DHCP } = useWifi(); // getDHCP,
  const [dhcp, dhcpToggle] = useState(true);
  const [dhcpChanged, setDhcpChanged] = useState(false);
  const [dhcpOrig, setDhcpOrig] = useState(true);

  const runToggle = () => {
    dhcpToggle(!dhcp);
    if (dhcpOrig === dhcp) {
      setDhcpChanged(true);
    } else {
      setDhcpChanged(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    saveDHCP({ DHCP: dhcp });
  };

  useEffect(() => {
    // console.log("wifi.js get DHCP");
    // getDHCP();
    dhcpToggle(DHCP);
    setDhcpOrig(DHCP);
  }, [DHCP]);

  return (
    <Fragment>
      <p>Use DHCP Server or Static IP:</p>
      <form onSubmit={onSubmit}>
        <label for="DHCP">Use DHCP</label>
        <input
          type="radio"
          id="DHCP"
          name="dhcpMode"
          value="DHCP"
          checked={dhcp}
          onClick={runToggle}
        />
        <br />
        <label for="STATIC">Use Static IP</label>
        <input
          type="radio"
          id="STATIC"
          name="dhcpMode"
          value="STATIC"
          checked={!dhcp}
          onClick={runToggle}
        />
        {dhcpChanged && <Save />}
      </form>
    </Fragment>
  );
};

export default UseDhcp;
