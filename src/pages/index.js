import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import backgroundImage from "../../public/img/banner.jpg"

const Home = () => {
	return (
		<>
			<Head>
				<title>Beranda - IPB DiSign</title>
			</Head>

			<Header />

			<section  className="relative pb-20 lg:pb-28 pt-40 bg-fixed bg-cover bg-bottom flex items-center justify-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-neutral-950/80" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
				<div className="z-10 px-5 text-center max-w-2xl mx-auto overflow-hidden">
					<h1 className="text-3xl lg:text-4xl capitalize text-white leading-relaxed mb-8 px-2" data-aos="fade-up">Verifikasi tanda tangan digital</h1>
					<form onSubmit={(e) => e.preventDefault()} data-aos="fade-up" data-aos-delay="100">
						<div>
							<input type="file" className="hidden" id="file" accept="application/pdf" />
							<div className="sm:flex">
								<label htmlFor="file" className="w-full flex gap-3 items-center justify-center sm:justify-start py-2 px-4 text-sm text-center bg-neutral-600/60 text-white rounded-2xl cursor-pointer">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
									</svg>

									Pilih file PDF untuk di verifikasi
									<button type="submit" className="hidden sm:block py-2 px-5 bg-gold rounded-xl text-sm ml-auto z-10 hover:opacity-90">Verifikasi</button>
								</label>
								<button type="submit" className="sm:hidden py-2 mt-3 w-full px-5 bg-gold rounded-xl text-sm">Verifikasi</button>
							</div>
						</div>
					</form>
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-5 ">
				<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl  mt-8 lg:-mt-10 relative z-10 overflow-hidden">
					<div className="flex flex-wrap items-start justify-between -mx-10 lg:divide-x lg:divide-neutral-800 gap-y-6">
						<div className="w-full md:w-1/2 lg:w-1/3 px-10 group">
							<Link href={"https://digisign.ipb.ac.id/Verify/Offline"} className="text-center leading-7 hover:text-gold duration-300 mt-5 block" data-aos="fade-up">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[60px] h-[60px] text-neutral-500 group-hover:text-white duration-300 mx-auto">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
								</svg>
								<div className="mt-5">
									<h2 className="text-2xl mb-1 text-neutral-400 group-hover:text-white duration-300">Verifikasi Online</h2>
									<p className="text-neutral-500 group-hover:text-white duration-300">Klik di sini untuk melihat petunjuk verifikasi dokumen di komputer Anda</p>
								</div>
							</Link>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-10 md:border-l border-neutral-800 lg:border-l-0 border-t border-b pt-5 pb-5 md:border-t-0 md:border-b-0 md:pt-0 md:pb-0 group">
							<Link href={"https://digisign.ipb.ac.id/Verify/Qr"} className="text-center leading-7 hover:text-gold duration-300 mt-5 block" data-aos="fade-up" data-aos-delay="100">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[60px] h-[60px] text-neutral-500 group-hover:text-white duration-300 mx-auto">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
								</svg>
								<div className="mt-5">
									<h2 className="text-2xl mb-1 text-neutral-400 group-hover:text-white duration-300">Scan QR Code</h2>
									<p className="text-neutral-500 group-hover:text-white duration-300">Klik di sini untuk scan QR code yang ada pada tanda tangan</p>
								</div>
							</Link>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-10 group">
							<Link href={"/signin/create"} className="text-center leading-7 hover:text-gold duration-300 mt-5 block" data-aos="fade-up" data-aos-delay="200">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[60px] h-[60px] text-neutral-500 group-hover:text-white duration-300 mx-auto">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
								</svg>
								<div className="mt-5">
									<h2 className="text-2xl mb-1 text-neutral-400 group-hover:text-white duration-300">Tanda Tangani Dokumen</h2>
									<p className="text-neutral-500 group-hover:text-white duration-300">Klik di sini untuk membuat tanda tangan digital pada dokumen</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default Home;