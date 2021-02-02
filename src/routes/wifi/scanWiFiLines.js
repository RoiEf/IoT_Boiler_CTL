import { h, Fragment } from "preact";
// import { useState, useEffect } from "preact/hooks";
import useWifi from "../../context/useWifi";

const Line = (props) => {
  const { selectNetworkLine } = useWifi();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.ssid.value);
    selectNetworkLine({ ssid: e.target.ssid.value, auth: e.target.auth.value });
  };

  return (
    <tr>
      <td>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="ssid" value={props.member.SSID} />
          <input type="hidden" name="auth" value={props.member.auth} />
          <input type="submit" name="select" value="Select" />
        </form>
      </td>
      <td>{props.member.SSID}</td>
      <td>{props.member.auth ? "V" : "Open"}</td>
      <td>{props.member.signal}</td>
    </tr>
  );
};

function ScanWiFiLines(props) {
  const list = props.data.map((member) => <Line member={member} />);
  // const [found, updateFound] = useState(false);
  // const [authType, updateAuthType] = useState("");
  // console.log(list);
  return <Fragment>{list}</Fragment>;
}

export default ScanWiFiLines;
