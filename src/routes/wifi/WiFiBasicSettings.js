import { h } from "preact";
import DeviceMode from "./deviceMode";
import SSIDinAP from "./SSIDinAP";
import SSIDinSTA from "./networkInClient";
import ScanWiFi from "./scanWiFi";

const WiFiBasicSettings = (/* props */) => {
  return (
    <div id="contentBox">
      <h1>Basic WiFi Settings</h1>
      {/* Device mode */}
      <DeviceMode />
      <br />
      <hr />
      {/* SSID in AP */}
      <SSIDinAP />
      <br />
      <hr />
      {/* SSID (Network to connect to) in Client mode */}
      <SSIDinSTA />
      <br />
      <hr />
      <ScanWiFi />
    </div>
  );
};

export default WiFiBasicSettings;
