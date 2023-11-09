import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
	const router = useRouter()

	return (
		<div id="sidebar"
			className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 scrollbar-y bg-neutral-900 lg:my-4 lg:ml-4 lg:rounded-3xl [--body-scroll:true]">
			<div className="px-6">
				<Link className="flex-none text-xl font-semibold" href="/" aria-label="Logo">
					<img src="/img/logo.png" alt="Logo" />
				</Link>
			</div>
			<div className="mt-4 py-3 px-6 border-t border-b border-neutral-800 flex items-center gap-4">
				<img src="/img/profile-1.jpg" alt="profile" className="w-10 h-10 rounded-full" />
				<div className="text-sm">
					Muhammad Farhan
					<span className="block mt-px text-xs text-neutral-400 font-normal">Bergabung Okt, 2023</span>
				</div>
			</div>
			<nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
				<ul className="space-y-1.5">
					<li>
						<Link className={`side-link ${router.pathname === "/dashboard" ? "active" : ""}`} href="/dashboard">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round"
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
							</svg>

							Beranda
						</Link>
					</li>

					<li>
						<Link className={`side-link ${router.pathname === "/signin/request" ? "active" : ""}`} href="/signin/request">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round"
									d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
							</svg>

							Permintaan
						</Link>
					</li>

					<li>
						<Link className={`side-link ${router.pathname === "/signin/create" ? "active" : ""}`} href="/signin/create">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
							</svg>

							Tanda Tangani
						</Link>
					</li>

					<li className={`hs-accordion ${router.pathname.includes("/document") ? "active" : ""}`} id="document-accordion">
						<button className="hs-accordion-toggle side-link w-full">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round"
									d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
							</svg>
							Dokumen

							<svg
								className="ml-auto block w-3 h-3 text-neutral-600 group-hover:text-neutral-500"
								width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
									strokeWidth="2" strokeLinecap="round"></path>
							</svg>
						</button>

						<div id="document-accordion" className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${router.pathname.includes("/document") ? "block" : "hidden"}`}>
							<ul className="my-4 ml-8 border-l-[3px] border-gold pl-4">
								<li>
									<Link className={`sub-link ${router.pathname === "/document/upload" ? "active" : ""}`}
										href="/document/upload">
										Unggah
									</Link>
								</li>
								<li>
									<Link className={`sub-link ${router.pathname === "/document/uploaded" ? "active" : ""}`}
										href="/document/uploaded">
										Diunggah
									</Link>
								</li>
								<li>
									<Link className={`sub-link ${router.pathname === "/document/signed" ? "active" : ""}`}
										href="/document/signed">
										Ditandatangani
									</Link>
								</li>
							</ul>
						</div>
					</li>

					<li className={`hs-accordion ${router.pathname.includes("/settings") ? "active" : ""}`} id="setting-accordion">
						<button className="hs-accordion-toggle side-link w-full">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round"
									d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							Pengaturan

							<svg
								className="ml-auto block w-3 h-3 text-neutral-600 group-hover:text-neutral-500"
								width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
									strokeWidth="2" strokeLinecap="round"></path>
							</svg>
						</button>

						<div id="setting-accordion"
							className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${router.pathname.includes("/settings") ? "block" : "hidden"}`}>
							<ul className="my-4 ml-8 border-l-[3px] border-gold pl-4">
								<li>
									<Link className={`sub-link ${router.pathname === "/settings/digital-certificate" ? "active" : ""}`}
										href="/settings/digital-certificate">
										Sertifikat Digital
									</Link>
								</li>
								<li>
									<Link className={`sub-link ${router.pathname === "/settings/signature-image" ? "active" : ""}`}
										href="/settings/signature-image">
										Gambar Tandatangan
									</Link>
								</li>
							</ul>
						</div>
					</li>

					<li>
						<Link className="side-link"
							href="/">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
								stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
							</svg>

							Verifikasi
						</Link>
					</li>
					<li className="!mt-5 lg:hidden">
						<button
							className="w-full flex items-center justify-center gap-3 bg-gold text-white text-sm px-4 py-2 rounded-full hover:opacity-80 duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8"
								stroke="currentColor" className="w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round"
									d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
							</svg>
							<span>Sign Out</span>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;