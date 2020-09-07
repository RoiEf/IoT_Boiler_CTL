import { h, createContext } from "preact";
import { useState } from "preact/hooks";

const StateContext = createContext([{}, () => { }]);

const StateContextProvider = (props) => {
  const [state, setState] = useState({
    auth: { user: null, password: null, isAutenticated: false },
    basic: { wifiAP: true, lora: false, lan: false, bt: false, serial: false },
    wifi: { SSID: "base_iot", wifiPassword: "" },
    admin: { updateSucsess: false },
  });

  return (
    <StateContext.Provider value={[state, setState]}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
