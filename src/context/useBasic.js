import { useContext } from "preact/hooks";
// import { route } from 'preact-router';
import { StateContext } from "./stateContext";

const address = `http://${window.location.hostname}:${80}/basic`;

const useBasic = () => {
  const [state, setState] = useContext(StateContext);

  function getBasic() {
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
        if (res.device_mode === "AP") {
          setState((state) => ({
            ...state,
            basic: {
              wifiAP: true,
              lora: false,
              lan: false,
              bt: false,
              serial: false,
            },
          })); //true
        } else {
          console.log("Updating basic state Wifi = STA");
          setState((state) => ({
            ...state,
            basic: {
              wifiAP: false,
              lora: false,
              lan: false,
              bt: false,
              serial: false,
            },
          })); //false
        }
      })
      .catch((error) => console.log("something failed", error));
  }
  function saveBasic(obj) {
    setState((state) => ({ ...state, basic: { wifiAP: obj.wifiAP } }));
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: state.auth.user,
        password: state.auth.password,
        device_mode: obj.wifiAP,
        cmd: "update",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("basic response: ", res);
      })
      .catch((error) => console.log("something failed", error));
  }
  return { getBasic, saveBasic, wifiAP: state.basic.wifiAP };
};

export default useBasic;
