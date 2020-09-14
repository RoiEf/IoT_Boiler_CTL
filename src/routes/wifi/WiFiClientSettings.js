import { h } from "preact";
import UseDhcp from "./dhcp";
import StaticIP from "./staticIP";

const WiFiClientSettings = (/* props */) => {

  return (
    <div id="contentBox">
      <h1>Client Mode Settings</h1>
      {/* dhcp or static */}
      <UseDhcp />
      <br /><hr />
      {/* static ip */}
      <StaticIP />
    </div>
  );
};

export default WiFiClientSettings;
