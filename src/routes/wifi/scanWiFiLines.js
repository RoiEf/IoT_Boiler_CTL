import { h, Fragment } from "preact";
// import { useState, useEffect } from "preact/hooks";

function Line(props) {
  return (
    <tr>
      <td>
        <input type="submit" name="select" value="Select" />
      </td>
      <td>{props.member.SSID}</td>
      <td>{props.member.auth ? "V" : "Open"}</td>
      <td>{props.member.signal}</td>
    </tr>
  );
}

function ScanWiFiLines(props) {
  const list = props.data.map((member) => <Line member={member} />);
  // const [found, updateFound] = useState(false);
  // const [authType, updateAuthType] = useState("");
  // console.log(list);
  return <Fragment>{list}</Fragment>;
}

export default ScanWiFiLines;
