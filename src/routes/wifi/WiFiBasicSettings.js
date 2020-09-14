import { h } from "preact";
import DeviceMode from "./deviceMode";
import SSIDinAP from "./SSIDinAP";

const WiFiBasicSettings = (/* props */) => {

  return (
    <div id="contentBox">
      <h1>Basic WiFi Settings</h1>
      {/* Device mode */}
      <DeviceMode />
      <br /><hr />
      {/* SSID in AP */}
      <SSIDinAP />
    </div>
  );
};

export default WiFiBasicSettings;
