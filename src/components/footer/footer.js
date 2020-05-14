import { h } from 'preact';
import { useContext } from 'preact/hooks/src';
import { AuthContext } from "../../context/authContext";

const Footer = () => {
	const loca = `${window.location.hostname}`;
	const [state, setState] = useContext(AuthContext);
	return (
		<footer id="footer">
			<p>{loca}</p>
			<p>{state}</p>
		</footer>
	);
};

export default Footer;
