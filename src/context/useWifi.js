import { useContext } from "preact/hooks";
import { StateContext } from "./stateContext";

const address = `http://${window.location.hostname}:${80}/wifi`;

const useWifi = () => {
  const [state, setState] = useContext(StateContext);

  function getData() {
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: state.auth.user,
        password: state.auth.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res);
        setState((state) => ({
          ...state,
          wifi: {
            SSID: res.ssid,
            wifiPassword: res.wifiPassword,
          },
        }));
      })
      .catch((error) => console.log("something failed", error));
  }
  function saveData(obj) {
    setState((state) => ({
      ...state,
      wifi: { SSID: obj.SSID, wifiPassword: obj.wifiPassword },
    }));
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: state.auth.user,
        password: state.auth.password,
        ssid: obj.SSID,
        wifiPassword: obj.wifiPassword,
        cmd: "update",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("basic response: ", res);
      })
      .catch((error) => console.log("something failed", error));
  }
  return {
    getData,
    saveData,
    SSID: state.wifi.SSID,
    wifiPassword: state.wifi.wifiPassword,
  };
};

export default useWifi;
