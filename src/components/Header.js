import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
	const router = useRouter()
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {

			if (window.pageYOffset > 0) {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-4  ${isActive ? 'bg-neutral-900' : 'bg-transparent'} fixed top-0 left-0 right-0 duration-200`}>
			<nav className="max-w-6xl w-full mx-auto px-5 md:flex md:items-center md:justify-between" aria-label="Global">
				<div className="flex items-center justify-between">
					<Link className="flex-none" href="/">
						<img src="/img/logo.png" alt="Logo" className="w-40" />
					</Link>
					<div className="md:hidden">
						<button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border bg-neutral-800  border-neutral-700 text-white  focus:outline-none focus:ring-1 focus:ring-neutral-600" data-hs-collapse="#navbar" aria-controls="navbar" aria-label="Toggle navigation">
							<svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
							<svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
						</button>
					</div>
				</div>
				<div id="navbar" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
					<div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5 bg-neutral-900 md:bg-transparent p-4 rounded-xl">
						<Link className={`${router.pathname === "/" ? "text-gold" : "text-neutral-500 hover:text-neutral-400"} duration-300`} href="/" aria-current="page">Verifikasi</Link>
						<Link className="font-medium text-neutral-500 hover:text-neutral-400 duration-300" href="https://ipb.link/panduan-disign" target={"_blank"}>Panduan</Link>
						<Link className={`${router.pathname === "/about" ? "text-gold" : "text-neutral-500 hover:text-neutral-400"} duration-300`} href="/about">Tentang</Link>
						<Link className="font-medium text-neutral-500 hover:text-neutral-400 duration-300" href="/disclaimer">Disclaimer</Link>
						<div className="md:ml-3">
							<Link href={"/dashboard"} className="inline-block py-2 px-3 bg-[#073a6d] text-white text-sm rounded-lg hover:opacity-80 duration-300 active:scale-90">Dashboard</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;