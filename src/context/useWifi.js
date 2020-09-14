import { useContext } from "preact/hooks";
import { StateContext } from "./stateContext";

const address = `http://${window.location.hostname}:${80}/wifi`;

const useWifi = () => {
  const [state, setState] = useContext(StateContext);

  function getData() {
    let bDHCP = true;
    let bWiFiAP = true;

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
        if (res.device_mode === "STA") {
          bWiFiAP = false;
        }
        setState((state) => ({
          ...state,
          wifi: {
            wifiAP: bWiFiAP,
            SSID: res.ssid,
            wifiPassword: res.wifiPassword,
            DHCP: bDHCP,
            updateSent: false,
            updateSucsess: false,
          },
          staticIP: {
            ip1: res.ip1, ip2: res.ip2, ip3: res.ip3, ip4: res.ip4,
            sm1: res.sm1, sm2: res.sm2, sm3: res.sm3, sm4: res.sm4,
            dg1: res.dg1, dg2: res.dg2, dg3: res.dg3, dg4: res.dg4,
          },
        }));
      })
      .catch((error) => console.log("something failed", error));
  }
  function saveData(obj) {
    if (obj.caller === "SSIDinAP") { /* typeof obj.caller === "undefined" */
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
          setState((state) => ({
            ...state,
            wifi: {
              wifiAP: state.wifi.wifiAP,
              SSID: obj.SSID,
              wifiPassword: obj.wifiPassword,
              DHCP: state.wifi.DHCP,
              // updateSent: true,
              // updateSucsess: true,
            },
          }));
        })
        .catch((error) => console.log("something failed", error));
    } else if (obj.caller === "staticIP") {
      setState((state) => ({
        ...state,
        staticIP: {
          ip1: obj.ip1, ip2: obj.ip2, ip3: obj.ip3, ip4: obj.ip4,
          sm1: obj.sm1, sm2: obj.sm2, sm3: obj.sm3, sm4: obj.sm4,
          dg1: obj.dg1, dg2: obj.dg2, dg3: obj.dg3, dg4: obj.dg4,
        },
      }));
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: state.auth.user,
          password: state.auth.password,
          cmd: "updateStaticIP",
          ip1: obj.ip1, ip2: obj.ip2, ip3: obj.ip3, ip4: obj.ip4,
          sm1: obj.sm1, sm2: obj.sm2, sm3: obj.sm3, sm4: obj.sm4,
          dg1: obj.dg1, dg2: obj.dg2, dg3: obj.dg3, dg4: obj.dg4,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("basic response: ", res);
        })
        .catch((error) => console.log("something failed", error));

    } if (obj.caller === "deviceMode") {
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: state.auth.user,
          password: state.auth.password,
          wifiAP: obj.wifiAP,
          cmd: "updateDeviceMode",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("basic response: ", res);
          if (res.message === "Device Mode Update sucess") {
            setState((state) => ({
              ...state,
              wifi: {
                wifiAP: obj.wifiAP,
                SSID: state.wifi.SSID,
                wifiPassword: state.wifi.wifiPassword,
                DHCP: state.wifi.DHCP,
                updateSent: true,
                updateSucsess: true
              },
            }));
          } else if (res.message === "Auth Faild") {
            setState((state) => ({
              ...state,
              auth: { user: null, password: null, isAutenticated: false },
            }));
          } else {
            // update failed but not autentication
            setState((state) => ({
              ...state,
              wifi: {
                wifiAP: state.wifi.wifiAP,
                SSID: state.wifi.SSID,
                wifiPassword: state.wifi.wifiPassword,
                DHCP: state.wifi.DHCP,
                updateSent: true,
                updateSucsess: false,
              },
            }));
          }
        })
        .catch((error) => console.log("something failed", error));
    }
  }

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
  function reset() {
    setState((state) => ({
      ...state,
      wifi: {
        SSID: state.wifi.SSID,
        wifiPassword: state.wifi.wifiPassword,
        DHCP: state.wifi.DHCP,
        updateSent: false,
        updateSucsess: false
      },
    }));
  }

  return {
    getData,
    saveData,
    reset,
    saveDHCP,
    SSID: state.wifi.SSID,
    wifiPassword: state.wifi.wifiPassword,
    DHCP: state.wifi.DHCP,
    updateSent: state.wifi.updateSent,
    updateSucsess: state.wifi.updateSucsess,
    staticIP: state.staticIP,
    wifiAP: state.wifi.wifiAP,
  };
};

export default useWifi;
