import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/img/logo.png"

const Navbar = ({ title }) => {

	const [overlay, setOverlay] = useState(false)

	const [isClicked, setIsClicked] = useState(false);

	const showOverlay = () => {
		overlay ? setOverlay(false) : setOverlay(true)

		setIsClicked(prevState => !prevState);
	}

	const hideOverlay = () => {
		overlay ? setOverlay(false) : setOverlay(true)
	}

	return (
		<>
			<nav className="px-5 lg:px-0 mb-8 lg:mb-10">
				<div className="w-full bg-neutral-900 rounded-b-2xl lg:bg-transparent py-3 px-5 lg:px-14 lg:pt-8">
					<div className="flex items-center justify-between lg:hidden">
						<div className="lg:hidden">
							<Link href="/" className="flex-none text-xl font-semibold" aria-label="Logo">
								<Image src={logo} sizes="100vw" alt="Logo" priority style={{
									width: "150px",
									height: "auto"
								}} />
							</Link>
						</div>
						<div>
							<button type="button" onClick={showOverlay}
								className="text-neutral-500 lg:hidden w-10 h-10 flex items-center justify-center bg-neutral-800/80 rounded-lg active:scale-90 duration-300 z-[100] relative"
								data-hs-overlay="#sidebar" aria-controls="sidebar" aria-label="Toggle navigation">
								<span className="sr-only">Toggle Navigation</span>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className={`w-7 h-7 block ${isClicked ? 'hidden' : ''}`}
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
								</svg>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className={`w-7 h-7 ${isClicked ? 'block' : 'hidden'}`}
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>

							</button>
						</div>
					</div>

					<div className="lg:flex lg:items-center lg:justify-between hidden">
						<div className="lg:ml-64">
							<h2 className="text-3xl">{title}</h2>
						</div>
						<div>
							<button
								className="inline-flex items-center gap-3 bg-gold text-white text-sm px-3 py-1.5 rounded-full hover:opacity-80 duration-300">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8"
									stroke="currentColor" className="w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round"
										d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
								</svg>
								<span>Sign Out</span>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{overlay && (
				<div className="fixed inset-0 z-[60] bg-neutral-900/60"></div>
			)}


		</>
	);
}

export default Navbar;