import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import ScanWiFiLines from "./scanWiFiLines";

function ScanWiFi() {
  const [found, updateFound] = useState(false);
  const [LinesArr, updateLinesArr] = useState([]);

  return (
    <Fragment>
      <p>WiFi networks in range</p>
      {found ? (
        <p>
          <table>
            <th>
              <td> </td>
              <td>SSID</td>
              <td>Authentication</td>
              <td>Signal strength</td>
            </th>
            <ScanWiFiLines LinesArr={LinesArr} />
          </table>
        </p>
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
