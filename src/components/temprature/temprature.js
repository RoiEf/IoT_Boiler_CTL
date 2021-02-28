import { h } from "preact";
import { useState,  useEffect} from "preact/hooks";

const address = `http://${window.location.hostname}:${80}/temprature`;

const Temprature = () => {
    const [temprature, setTemprature] = useState(0);

const getTemprature = () =>{
    fetch(address)
    .then((res) => res.json())
    .then((res) => {
        setTemprature(res.temprature);
    })
    .catch((error) => console.log("something failed", error));
};
useEffect(() => {
    // console.log("wifi.js get data");
    getTemprature();
  }, []);

    return(<p>Temprature: {temprature}</p>);
};

export default Temprature;
