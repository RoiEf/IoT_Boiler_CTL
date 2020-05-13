import { h } from 'preact';

const Footer = () => {
	const loca = `${window.location.hostname}`;
	return (
		<footer id="footer">
			<p>{loca}</p>
		</footer>
	);
};

export default Footer;
