const Footer = () => {
	return (
		<footer className="max-w-6xl px-5 mx-auto">
			<div className="flex items-center justify-between text-sm text-neutral-400 mt-14 pb-10">
				<div>
					© {new Date().getFullYear()} - IPB University
				</div>
				<div>
					All Rights Reserved
				</div>
			</div>
		</footer>
	);
}

export default Footer;