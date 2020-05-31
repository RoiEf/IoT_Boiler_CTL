import { useContext } from "preact/hooks";
import { StateContext } from "./stateContext";

const address = `http://${window.location.hostname}:${80}/updates/firmware`;

const useUpdate = () => {
  const [state, setState] = useContext(StateContext);

  function saveData(obj) {
    if (state.auth.isAutenticated) {
      obj.formData.append("userName", state.auth.user);
      obj.formData.append("password", state.auth.password);

      // const formData = new FormData();
      // formData.append("userName", "admin");
      // formData.append("password", "12345");

      // console.log("userName", formData.get("userName"));
      fetch(address, {
        method: "post",
        body: obj.formData,
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
