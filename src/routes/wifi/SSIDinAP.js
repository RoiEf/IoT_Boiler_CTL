import { h, Fragment } from "preact";
import useWifi from "../../context/useWifi";

import Save from "../../components/save/save";

const SSIDinAP = (/* props */) => {
    const { saveData, reset, updateSent, updateSucsess } = useWifi();

    return (<Fragment>
        <p>SSID in AP mode:</p>
    </Fragment>);
};

export default SSIDinAP;
