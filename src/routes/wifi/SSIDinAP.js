import { h, Fragment } from "preact";
import { useState, useEffect /*, useContext */ } from "preact/hooks";
import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";

const SSIDinAP = (/* props */) => {
    const { saveData, reset, updateSent, updateSucsess, SSID, wifiPassword } = useWifi();
    const [ssid, updateSSID] = useState("base_iot");
    const [password, updatePassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        saveData({
            caller: "SSIDinAP",
            SSID: ssid,
            wifiPassword: password,
        });
    };

    useEffect(() => {
        console.log("SSIDinAP.js useEffect");
        updateSSID(SSID);
        updatePassword(wifiPassword);
    }, [SSID, wifiPassword]);

    return (<Fragment>
        {(updateSent === true && updateSucsess === false) && <h2>Error Updating SSID / PASSWORD</h2>}
        {(updateSent === true && updateSucsess === true) && <h2>Updating SSID / PASSWORD Success</h2>}
        <p>SSID in AP mode:</p>
        <form onSubmit={onSubmit}>
            <p>
                SSID:
            <input
                    type="text"
                    value={ssid}
                    onInput={(e) => updateSSID(e.target.value)}
                />
            </p>
            <p>
                Password:
            <input
                    type="text"
                    value={password}
                    onInput={(e) => updatePassword(e.target.value)}
                />
                {password === "" && ' If Password is left blank, No security will be used for WiFi'}
            </p>
            <Save />
        </form>
    </Fragment>);
};

export default SSIDinAP;
