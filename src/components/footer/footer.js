import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { AuthContext } from "../../context/authContext";

const Footer = () => {
	const loca = `${window.location.hostname}`;
	const [state, setState] = useContext(AuthContext);
	return (
		<footer id="footer">
			<p>{loca}</p>
			<p>{state.isAutenticated ? <p>Logged as: {state.user}</p> : <p>Not logged in.</p>}</p>
		</footer>
	);
};

export default Footer;
