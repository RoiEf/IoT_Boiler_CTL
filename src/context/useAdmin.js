import { useContext } from "preact/hooks";
import { StateContext } from "./stateContext";

const address = `http://${window.location.hostname}:${80}/updates/password`;

const useAdmin = () => {
  const [state, setState] = useContext(StateContext);

  function saveData(obj) {
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: state.auth.user,
        password: obj.password,
        password1: obj.password1,
        password2: obj.password2,
        cmd: "update",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("basic response: ", res);
        if (res.message === "Password Update sucess") {
          setState((state) => ({
            ...state,
            auth: { password: obj.password },
          }));
        } else if (res.message === "Auth Faild") {
          setState((state) => ({
            ...state,
            auth: { user: null, password: null, isAutenticated: false },
          }));
        }
      })
      .catch((error) => console.log("something failed", error));
  }
  // function reset() {
  //   setState((state) => ({
  //     ...state,
  //     admin: { password: null, password1: null, password2: null },
  //   }));
  // }
  return {
    saveData,
    updateSucsess: state.updateSucsess,
  };
};

export default useAdmin;
