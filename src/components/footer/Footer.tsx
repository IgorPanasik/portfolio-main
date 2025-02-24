export default function Footer() {
	const data = new Date();
	return (
		<footer className='container'>
			<p className='footer-text'>© {data.getFullYear()} Panasik|Igor.dev</p>
		</footer>
	);
}
