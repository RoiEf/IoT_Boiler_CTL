import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import useWifi from "../../context/useWifi";

const address = `http://${window.location.hostname}:${80}/wifi/scan`;

function ScanWiFi() {
  const {
    scanWiFi,
    selectNetworkLine,
    wifiLinesArr,
    wifiLinesUpdate,
  } = useWifi();
  const [found, updateFound] = useState(false);
  const [LinesArr, updateLinesArr] = useState([
    // { SSID: "one", auth: true, signal: 5 },
    // { SSID: "two", auth: true, signal: 5 },
  ]);

  useEffect(() => {
    // console.log("scanWiFi.js useEffect");
    scanWiFi();
    // updateData();
  }, []);

  useEffect(() => {
    updateLinesArr(wifiLinesArr);
    updateFound(wifiLinesUpdate);
  }, [wifiLinesArr, wifiLinesUpdate]);


  const onSubmitScanAgain = (e) => {
    e.preventDefault();
    // console.log("scanWiFi.js onSubmit");
    scanWiFi();
    // updateData();
  };

  const onSubmitSelectLine = (e) => {
    e.preventDefault();
    // console.log(e.target.ssid.value);
    selectNetworkLine({ ssid: e.target.ssid.value, auth: e.target.auth.value });
  };

  function tableLines() {
    return LinesArr.map((line, index) => {
      const { SSID, auth, signal } = line;
      return (
        <tr>
          <td>
            <form onSubmit={onSubmitSelectLine}>
              <input type="hidden" name="ssid" value={SSID} />
              <input type="hidden" name="auth" value={auth} />
              <input type="submit" name="select" value="Select" />
            </form>
          </td>
          <td>{SSID}</td>
          <td>{auth ? "V" : "Open"}</td>
          <td>{signal}</td>
        </tr>
      );
    });
  }

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
          {tableLines()}
          {/*<ScanWiFiLines data={LinesArr} />*/}
        </table>
      ) : (
        <p>NO WiFi networks Found</p>
      )}
      <form onSubmit={onSubmitScanAgain}>
        <p class="submit">
          <input type="submit" name="rescan" value="Scan Again" />
        </p>
      </form>
    </Fragment>
  );
}

export default ScanWiFi;
