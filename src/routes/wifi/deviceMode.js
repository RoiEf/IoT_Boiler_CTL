import { h, Fragment } from "preact";
import { useState, useEffect /*, useContext */ } from "preact/hooks";
import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";

const DeviceMode = (/* props */) => {
    const { saveData, reset, updateSent, updateSucsess, wifiAP } = useWifi();
    const [checked, toggle] = useState(true);
    // const [successMsg, setSuccsessMsg] = useState(false);

    const runToggle = () => {
        toggle(!checked);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        saveData({
            caller: "deviceMode",
            wifiAP: checked
        });
    };

    useEffect(() => {
        console.log("deviceMode.js useEffect reset");
        reset();
    }, []);
    useEffect(() => {
        console.log("deviceMode.js Updating toggle/checked data");
        toggle(wifiAP);
    }, [wifiAP]);

    return (<Fragment>
        {(updateSent === true && updateSucsess === false) && <h2>Error Updating Device Mode</h2>}
        {(updateSent === true && updateSucsess === true) && <h2>Updating Device Mode Success</h2>}
        <p>Device Mode:</p>
        <form onSubmit={onSubmit}>
            <label for="AP">Use as stand alone device (AP)</label>
            <input
                type="radio"
                id="AP"
                name="deviceMode"
                value="AP"
                checked={checked}
                onClick={runToggle}
            />
            <br />
            <label for="STA">Use as network client device</label>
            <input
                type="radio"
                id="STA"
                name="deviceMode"
                value="STA"
                checked={!checked}
                onClick={runToggle}
            />
            <Save />
        </form>
    </Fragment>);
};

export default DeviceMode;
