import Header from "@/components/Header";
import Head from "next/head";
import backgroundImage from "../../public/img/banner.jpg"
import Link from "next/link";
import Footer from "@/components/Footer";

const Disclaimer = () => {
	return (
		<>
			<Head>
				<title>Disclaimer - IPB DiSign</title>
			</Head>

			<Header />

			<section className="relative pb-20 lg:pb-28 pt-40 bg-fixed bg-cover bg-bottom flex items-center justify-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-neutral-950/80" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
				<div className="z-10 px-5 text-center max-w-2xl mx-auto">
					<h1 className="text-3xl lg:text-4xl capitalize text-white leading-relaxed px-2 mb-8">Disclaimer</h1>
					<ol className="flex items-center justify-center whitespace-nowrap" aria-label="Breadcrumb">
						<li className="inline-flex items-center">
							<Link className="flex items-center text-sm text-neutral-500 hover:text-white duration-300" href="/">
								Home
							</Link>
							<svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
						</li>
						<li className="inline-flex items-center text-sm font-semibold truncate text-gold" aria-current="page">
							Disclaimer
						</li>
					</ol>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-5 mt-8 lg:mt-10">
				<h2 className="text-2xl mb-5">Disclaimer</h2>
				<ul className="list-disc space-y-1 text-neutral-500 ml-10">
					<li>Tanda tangan digital yang dikeluarkan IPB DiSign hanya untuk keperluan internal IPB University dan tidak memiliki kekuatan hukum di Republik Indonesia.</li>
					<li>Tanda tangan digital pada dokumen yang sudah dicetak tidak dapat lagi diverifikasi keabsahannya.</li>
					<li>Segala bentuk modifikasi dokumen PDF yang sudah ditanda tangani secara digital, termasuk menggabungkan halamannya dengan PDF lain atau memisahkan halaman tertentu ke file lain, akan membuat tanda tangan digital menjadi tidak valid.</li>
					<li>Sebagian aplikasi penampil file PDF tidak dapat menampilkan tanda tangan digital, misalnya browser Mozilla Firefox dan beberapa penampil PDF di sistem Android. Gunakan aplikasi penampil PDF yang mendukung tampilan tanda tangan digital.</li>
				</ul>
			</div>

			<Footer />
		</>
	);
}

export default Disclaimer;