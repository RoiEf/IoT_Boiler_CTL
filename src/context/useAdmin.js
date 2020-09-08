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
            auth: { user: state.auth.user, password: obj.password1, isAutenticated: true },
            admin: { updateSent: true, updateSucsess: true },
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
            admin: { updateSent: true, updateSucsess: false },
          }));
        }
      })
      .catch((error) => console.log("something failed", error));
  }
  function reset() {
    setState((state) => ({
      ...state,
      admin: { updateSent: false, updateSucsess: false },
    }));
  }
  return {
    saveData,
    reset,
    updateSent: state.admin.updateSent,
    updateSucsess: state.admin.updateSucsess,
  };
};

export default useAdmin;
