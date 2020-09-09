import { h, createContext } from "preact";
import { useState } from "preact/hooks";

const StateContext = createContext([{}, () => { }]);

const StateContextProvider = (props) => {
  const [state, setState] = useState({
    auth: { user: null, password: null, isAutenticated: false },
    basic: { wifiAP: true, lora: false, lan: false, bt: false, serial: false },
    wifi: { SSID: "base_iot", wifiPassword: "", DHCP: true },
    staticIP: {
      ip1: 192, ip2: 168, ip3: 0, ip4: 100,
      sm1: 255, sm2: 255, sm3: 255, sm4: 0,
      dg1: 192, dg2: 168, gd3: 0, dg4: 1
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
