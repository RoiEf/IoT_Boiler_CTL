import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks"; //  , useContext
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";

const useNumber = () => {
  const [number, setNum] = useState(0);

  const setNumber = (val) => {
    if (Number.isInteger(val)) {
      setNum(val);
    } else if (typeof (val) === "string") {
      setNum(parseInt(val));
    }
  };

  return { number, setNumber };
};

const StaticIP = (/* props */) => {
  const { saveData, reset, updateSent, updateSucsess, staticIP } = useWifi();
  const { number: ip1, setNumber: updateIp1 } = useNumber();
  const { number: ip2, setNumber: updateIp2 } = useNumber();
  const { number: ip3, setNumber: updateIp3 } = useNumber();
  const { number: ip4, setNumber: updateIp4 } = useNumber();
  const { number: subnetMask1, setNumber: updateSubnetMask1 } = useNumber();
  const { number: subnetMask2, setNumber: updateSubnetMask2 } = useNumber();
  const { number: subnetMask3, setNumber: updateSubnetMask3 } = useNumber();
  const { number: subnetMask4, setNumber: updateSubnetMask4 } = useNumber();
  const { number: defaultGateway1, setNumber: updateDefaultGateway1 } = useNumber();
  const { number: defaultGateway2, setNumber: updateDefaultGateway2 } = useNumber();
  const { number: defaultGateway3, setNumber: updateDefaultGateway3 } = useNumber();
  const { number: defaultGateway4, setNumber: updateDefaultGateway4 } = useNumber();
  const [showError, setShowError] = useState(false);
  const [successMsg, setSuccsessMsg] = useState(false);

  let bValidData = true;

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      validateData();
      if (bValidData) {
        saveData({
          caller: "staticIP",
          ip1, ip2, ip3, ip4,
          sm1: subnetMask1, sm2: subnetMask2, sm3: subnetMask3, sm4: subnetMask4,
          dg1: defaultGateway1, dg2: defaultGateway2, dg3: defaultGateway3, dg4: defaultGateway4
        });
      } else {
        setShowError(true);
      }
    }, 500);
  };

  // const onValChange = (e) => {
  // console.log("e: ", e);
  // console.log("type of e:", typeof (e))
  // };

  const validateData = () => {
    let flag = 0;
    if (!Number.isInteger(ip1) || ip1 < 0 || ip1 > 255) {
      flag--;
      console.log("ip1: ", flag);
    }
    if (!Number.isInteger(ip2) || ip2 < 0 || ip2 > 255) {
      flag--;
      console.log("ip2: ", flag);
    }
    if (!Number.isInteger(ip3) || ip3 < 0 || ip3 > 255) {
      flag--;
      console.log("ip3: ", flag);
    }
    if (!Number.isInteger(ip4) || ip4 < 0 || ip4 > 255) {
      flag--;
      console.log("ip4: ", flag);
    }
    // if (!Number.isInteger(subnetMask1) || subnetMask1 < 0 || subnetMask1 > 255) {
    //   flag--;
    // }
    // if (!Number.isInteger(subnetMask2) || subnetMask2 < 0 || subnetMask2 > 255) {
    //   flag--;
    // }
    // if (!Number.isInteger(subnetMask3) || subnetMask3 < 0 || subnetMask3 > 255) {
    //   flag--;
    // }
    // if (!Number.isInteger(subnetMask4) || subnetMask4 < 0 || subnetMask4 > 255) {
    //   flag--;
    // }
    if (!Number.isInteger(defaultGateway1) || defaultGateway1 < 0 || defaultGateway1 > 255) {
      flag--;
      console.log("dg1: ", flag);
    }
    if (!Number.isInteger(defaultGateway2) || defaultGateway2 < 0 || defaultGateway2 > 255) {
      flag--;
      console.log("dg2: ", flag);
    }
    if (!Number.isInteger(defaultGateway3) || defaultGateway3 < 0 || defaultGateway3 > 255) {
      flag--;
      console.log("dg3: ", flag);
    }
    if (!Number.isInteger(defaultGateway4) || defaultGateway4 < 0 || defaultGateway4 > 255) {
      flag--;
      console.log("dg4: ", flag);
    }

    if (flag === 0) {
      console.log("Data Valid");
      bValidData = true;
    } else {
      console.log("Data NOT Valid");
      console.log("flag: ", flag);
      bValidData = false;
    }
  };

  useEffect(() => {
    console.log("staticIP.js useEffect reset");
    reset();
  }, []);
  useEffect(() => {
    console.log("staticIP.js useEffect set values");
    updateIp1(staticIP.ip1);
    updateIp2(staticIP.ip2);
    updateIp3(staticIP.ip3);
    updateIp4(staticIP.ip4);
    updateSubnetMask1(staticIP.sm1);
    updateSubnetMask2(staticIP.sm2);
    updateSubnetMask3(staticIP.sm3);
    updateSubnetMask4(staticIP.sm4);
    updateDefaultGateway1(staticIP.dg1);
    updateDefaultGateway2(staticIP.dg2);
    updateDefaultGateway3(staticIP.dg3);
    updateDefaultGateway4(staticIP.dg4);
    // setTimeout(() => { validateData(); }, 500);
  }, [staticIP]);

  return (
    <Fragment>
      {(updateSent === true && updateSucsess === false) && <h2>Error Updating IP Data</h2>}
      {successMsg && <h2>Updating IP Data Success</h2>}
      <p>Static IP Settings in Client Mode:</p>
      {showError && <h2>Invalid Data</h2>}
      <form onSubmit={onSubmit}>
        <p>
          IP:
            <input
            type="number"
            id="ip1"
            min="0"
            max="255"
            value={ip1}
            onInput={(e) => { updateIp1(e.target.value); /* onValChange(e)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={ip2}
            onInput={(e) => { updateIp2(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={ip3}
            onInput={(e) => { updateIp3(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={ip4}
            onInput={(e) => { updateIp4(e.target.value); /*onValChange(e.target.value)*/ }}
          />
        </p>
        <p>
          Subnet Mask:
            <input
            type="number"
            min="0"
            max="255"
            value={subnetMask1}
            onInput={(e) => { updateSubnetMask1(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={subnetMask2}
            onInput={(e) => { updateSubnetMask2(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={subnetMask3}
            onInput={(e) => { updateSubnetMask3(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={subnetMask4}
            onInput={(e) => { updateSubnetMask4(e.target.value); /*onValChange(e.target.value)*/ }}
          />
        </p>
        <p>
          Default Gateway:
            <input
            type="number"
            min="0"
            max="255"
            value={defaultGateway1}
            onInput={(e) => { updateDefaultGateway1(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={defaultGateway2}
            onInput={(e) => { updateDefaultGateway2(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={defaultGateway3}
            onInput={(e) => { updateDefaultGateway3(e.target.value); /*onValChange(e.target.value)*/ }}
          />
          <input
            type="number"
            min="0"
            max="255"
            value={defaultGateway4}
            onInput={(e) => { updateDefaultGateway4(e.target.value); /*onValChange(e.target.value)*/ }}
          />
        </p>
        <Save />
      </form>
    </Fragment>
  );
};

export default StaticIP;
