import { useContext } from "preact/hooks";
import { StateContext } from "./stateContext";

const address = `http://${window.location.hostname}:${80}/updates/firmware`;

const useUpdate = () => {
  const [state, setState] = useContext(StateContext);

  function saveData(obj) {
    if (state.auth.isAutenticated) {
      // fetch(address, { method: "post", body: formData }).catch(console.error);
      fetch(address, {
        method: "post",
        body: obj.body,
        //   headers: {
        //     "Content-type": "application/json",
        // },
        //   body: JSON.stringify({
        //     userName: state.auth.user,
        //     password: state.auth.password,
        //   }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Update response: ", res);
        })
        .catch((error) => console.log("something failed", error));
    }
  }
  return {
    saveData,
  };
};

export default useUpdate;
