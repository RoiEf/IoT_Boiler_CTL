import { h } from "preact";
import { useState, useContext } from "preact/hooks";
import { route } from "preact-router";
import { AuthContext } from "../../context/authContext";

const Login = (/* props */) => {
  const [state, setState] = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const address = `http://${window.location.hostname}:${80}/login`;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("address: ", address);
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("login response: ", res);
        if (res.message === "Auth sucess") {
          // props.updateAuthData({ user: userName, password });
          setState(state => ({ user: userName, password, isAutenticated: true }));
          setError(false);
          route("/", true);
        } else {
          setUserName("");
          setPassword("");
          setError(true);
        }
      })
      .catch((error) => console.log("something failed", error));
  };
  return (
    <div id="basePage">
      <div id="small">
        <h1>Login</h1>
        {error && <h2>Wrong user name or password</h2>}
        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onInput={(e) => setUserName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </p>
          <p class="submit">
            <input type="submit" name="commit" value="Login" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
