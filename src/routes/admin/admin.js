import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
// import { route } from 'preact-router';
// import { StateContext } from "../../context/stateContext";
import useAdmin from "../../context/useAdmin";

import Save from "../../components/save/save";

const Admin = (/* props */) => {
  const { saveData, updateSucsess } = useAdmin();
  const [password, updatePassword] = useState("");
  const [password1, updatePassword1] = useState("");
  const [password2, updatePassword2] = useState("");
  const [showSaveBTN, setShowSaveBTN] = useState(false);
  // const [state, setState] = useContext(StateContext);

  const onSubmit = (e) => {
    e.preventDefault();
    saveData({ password, password1, password2 });
  };

  const onPasswordChange = (e) => {
    if (e.length > 4 && password1.length > 4 && password2.length > 4) {
      // console.log("onPasswordChange enter");
      if (password1 === password2) {
        setShowSaveBTN(true);
      } else {
        setShowSaveBTN(false);
        console.log("onPasswordChange bad comp");
      }
    }
    if (e.length > 4) {
      console.log("onPasswordChange e: ", e);
    }
  };
  const onPassword1Change = (e) => {
    if (e.length > 4 && password.length > 4 && password2.length > 4) {
      // console.log("onPasswordChange enter");
      if (e === password2) {
        setShowSaveBTN(true);
      } else {
        setShowSaveBTN(false);
        console.log("onPassword1Change bad comp");
      }
    }
    if (e.length > 4) {
      console.log("onPassword1Change e: ", e);
    }
  };
  const onPassword2Change = (e) => {
    if (e.length > 4 && password.length > 4 && password1.length > 4) {
      // console.log("onPasswordChange enter");
      if (e === password1) {
        setShowSaveBTN(true);
      } else {
        setShowSaveBTN(false);
        console.log("onPassword2Change bad comp");
      }
    }
    if (e.length > 4) {
      console.log("onPassword2Change e: ", e);
    }
  };

  // useEffect(() => {
  //   console.log("Running useEffect");
  //   reset();
  // }, []);

  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Admin Settings</h1>
      </div>
      <div id="contentBox">
        <h1>Update Admin Password</h1>
        <form onSubmit={onSubmit}>
          <p>
            Current Password:
            <input
              type="text"
              value={password}
              onInput={(e) => { updatePassword(e.target.value); onPasswordChange(e.target.value) }}
            />
          </p>
          <p>
            New Password:
            <input
              type="text"
              value={password1}
              onInput={(e) => { updatePassword1(e.target.value); onPassword1Change(e.target.value) }}
            />
          </p>
          <p>
            New Password (again):
            <input
              type="text"
              value={password2}
              onInput={(e) => { updatePassword2(e.target.value); onPassword2Change(e.target.value) }}
            />
          </p>
          {showSaveBTN && <Save />}
        </form>
      </div>
    </div>
  );
};

export default Admin;
