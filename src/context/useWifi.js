import { useContext } from "preact/hooks";
import { StateContext } from "./stateContext";

const address = `http://${window.location.hostname}:${80}/wifi`;

const useWifi = () => {
  const [state, setState] = useContext(StateContext);

  function getData() {
    let bDHCP = true;
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
        if (res.dhcp === "STATIC") {
          bDHCP = false;
        }
        setState((state) => ({
          ...state,
          wifi: {
            SSID: res.ssid,
            wifiPassword: res.wifiPassword,
            DHCP: bDHCP,
          },
        }));
      })
      .catch((error) => console.log("something failed", error));
  }
  function saveData(obj) {
    setState((state) => ({
      ...state,
      wifi: { SSID: obj.SSID, wifiPassword: obj.wifiPassword, DHCP: state.wifi.DHCP, },
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
  // function getDHCP() {

  // }
  function saveDHCP(obj) {
    setState((state) => ({
      ...state,
      wifi: { SSID: state.wifi.SSID, wifiPassword: state.wifi.wifiPassword, DHCP: obj.DHCP, },
    }));
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: state.auth.user,
        password: state.auth.password,
        dhcp: obj.DHCP,
        cmd: "updateDHCP",
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
    // getDHCP,
    saveDHCP,
    SSID: state.wifi.SSID,
    wifiPassword: state.wifi.wifiPassword,
    DHCP: state.wifi.DHCP,
  };
};

export default useWifi;
