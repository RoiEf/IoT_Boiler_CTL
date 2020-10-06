import { h, Fragment } from "preact";
// import { useState, useEffect } from "preact/hooks";

function ScanWiFiLines(props) {
  const list = props.data.map((member) => (
    <tr>
      <td>
        <input type="submit" name="select" value="Select" />
      </td>
      <td>{member.SSID}</td>
      <td>{member.auth ? "V" : "Open"}</td>
      <td>{member.signal}</td>
    </tr>
  ));
  // const [found, updateFound] = useState(false);
  // const [authType, updateAuthType] = useState("");
  // console.log(list);
  return <Fragment>{list}</Fragment>;
}

export default ScanWiFiLines;
