import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const ScanWiFi = () => {
  const [ssid, updateSSID] = useState("");
  const [authType, updateAuthType] = useState("");

  return (
    <Fragment>
      <p>SSID in Client mode:</p>
      <p>
        Network SSID: {ssid ? ssid : <b>No Network selected</b>}
        {ssid && " | Autentication: "}
        {ssid && authType ? authType : <b>Open Network</b>}
      </p>
    </Fragment>
  );
};

export default ScanWiFi;
