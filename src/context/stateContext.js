import { h, createContext } from "preact";
import { useState } from "preact/hooks";

const StateContext = createContext([{}, () => {}]);

const StateContextProvider = (props) => {
  const [state, setState] = useState({
    auth: { user: null, password: null, isAutenticated: false },
    basic: { WiFi: true, lora: false, lan: false, bt: false, serial: false },
    wifi: {
      wifiAP: true,
      SSID: "base_iot",
      wifiPassword: "",
      DHCP: true,
      updateSent: false,
      updateSucsess: false,
      SSID_IN_Client: "No Network currently selected",
      Auth_IN_Client: false,
      SSID_From_Scan: false,
      Auth_From_Scan: false,
    },
    staticIP: {
      ip1: 0,
      ip2: 0,
      ip3: 0,
      ip4: 0,
      sm1: 0,
      sm2: 0,
      sm3: 0,
      sm4: 0,
      dg1: 0,
      dg2: 0,
      dg3: 0,
      dg4: 0,
    },
    wifiLines: {
      arr: [
        { SSID: "one", auth: true, signal: 5 },
        { SSID: "two", auth: true, signal: 5 },
      ],
      update: false,
    },
    admin: { updateSent: false, updateSucsess: false },
  });

  return (
    <StateContext.Provider value={[state, setState]}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
