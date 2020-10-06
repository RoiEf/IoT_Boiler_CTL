import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import ScanWiFiLines from "./scanWiFiLines";

const address = `http://${window.location.hostname}:${80}/wifi/scan`;

function ScanWiFi() {
  const [found, updateFound] = useState(false);
  const [LinesArr, updateLinesArr] = useState([
    { SSID: "one", auth: true, signal: 5 },
    { SSID: "two", auth: true, signal: 5 },
  ]);

  useEffect(() => {
    // console.log("scanWiFi.js useEffect");
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: "admin",
        password: "12345",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res: ", res);
        if (res.message === "No Networks found") {
          updateFound(false);
        } else {
          updateLinesArr(res.networks);
          updateFound(true);
        }
      })
      .catch((error) => console.log("something failed", error));
  }, []);

  return (
    <Fragment>
      <p>WiFi networks in range:</p>
      {found ? (
        <table border="1">
          <tr>
            <td> </td>
            <td>SSID</td>
            <td>Autrentication</td>
            <td>Signal strength</td>
          </tr>
          <ScanWiFiLines data={LinesArr} />
        </table>
      ) : (
        <p>NO WiFi networks Found</p>
      )}
      <p class="submit">
        <input type="submit" name="rescan" value="Scan Again" />
      </p>
    </Fragment>
  );
}

export default ScanWiFi;
