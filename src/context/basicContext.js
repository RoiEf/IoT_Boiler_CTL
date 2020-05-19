import { h, createContext } from "preact";
import { useState } from "preact/hooks";

const BasicContext = createContext([{}, () => {}]);

const BasicContextProvider = (props) => {
  const [bState, setBState] = useState({
    wifiAP: true,
    lora: false,
    lan: false,
    bt: false,
    serial: false,
  });

  return (
    <BasicContext.Provider value={[bState, setBState]}>
      {props.children}
    </BasicContext.Provider>
  );
};

export { BasicContext, BasicContextProvider };
