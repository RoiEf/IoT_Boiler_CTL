import { h } from "preact";
import { useState, useEffect /*, useContext */ } from "preact/hooks";
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
import useBasic from "../../context/useBasic";
import Save from "../../components/save/save";

const Basic = () => {
  // const [state, setState] = useContext(StateContext);
  const { getBasic, saveBasic, wifiAP } = useBasic();
  const [checked, toggle] = useState(true);
  const [wifiChanged, setWifiChanged] = useState(false);
  const [wifiOrig, setWifiOrig] = useState(true);

  const runToggle = () => {
    toggle(!checked);
    if (wifiOrig === checked) {
      setWifiChanged(true);
    } else {
      setWifiChanged(false);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    saveBasic({ wifiAP: checked });
    // if (checked) {
    //   console.log("deviceMode: AP");
    // } else {
    //   console.log("deviceMode: STA");
    // }
    // let demmyObj = { ...state.basic, wifiAP: checked };
    // setState((state) => ({ ...state, basic: demmyObj }));
  };

  useEffect(() => {
    console.log("Updating toggle/checked data");
    getBasic();
    toggle(wifiAP);
    setWifiOrig(wifiAP);
  }, [wifiAP]);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Basic Settings</h1>
      </div>
      <div id="contentBox">
        <h1>WiFi Settings</h1>
        <p>Device mode:</p>
        <form onSubmit={onSubmit}>
          <label for="AP">Use as stand alone device</label>
          <input
            type="radio"
            id="AP"
            name="deviceMode"
            value="AP"
            checked={checked}
            onClick={runToggle}
          />
          <br />
          <label for="STA">Use as network client device</label>
          <input
            type="radio"
            id="STA"
            name="deviceMode"
            value="STA"
            checked={!checked}
            onClick={runToggle}
          />
          {wifiChanged && <Save />}
        </form>
      </div>
      {/* <div id="contentBox">
        <h1>LoRa Settings</h1>
      </div>
      <div id="contentBox">
        <h1>LAN Settings</h1>
      </div>
      <div id="contentBox">
        <h1>BlueTooth Settings</h1>
      </div>
      <div id="contentBox">
        <h1>Serial Settings</h1>
      </div> */}
    </div>
  );
};

export default Basic;
