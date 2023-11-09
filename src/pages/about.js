import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import backgroundImage from "../../public/img/banner.jpg"

const About = () => {
	return (
		<>
			<Head>
				<title>Tentang - IPB DiSign</title>
			</Head>

			<Header />

			<section className="relative pb-20 lg:pb-28 pt-40 bg-fixed bg-cover bg-bottom flex items-center justify-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-neutral-950/80" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
				<div className="z-10 px-5 text-center max-w-2xl mx-auto">
					<h1 className="text-3xl lg:text-4xl capitalize text-white leading-relaxed px-2 mb-8" data-aos="fade-up">Tentang Tanda Tangan Digital</h1>
					<ol className="flex items-center justify-center whitespace-nowrap" aria-label="Breadcrumb">
						<li className="inline-flex items-center" data-aos="fade-up" data-aos-delay="100">
							<Link className="flex items-center text-sm text-neutral-500 hover:text-white duration-300" href="/">
								Home
							</Link>
							<svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
						</li>
						<li data-aos="fade-up" data-aos-delay="150" className="inline-flex items-center text-sm font-semibold truncate text-gold" aria-current="page">
							Tentang Tanda Tangan Digital
						</li>
					</ol>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-5 mt-8 lg:mt-10" data-aos="fade-up">
				<h2 className="text-2xl mb-5">Tanda Tangan Digital</h2>
				<p className="text-neutral-500">Tanda tangan digital adalah bentuk tanda tangan elektronis yang menggunakan metode kriptografi untuk menandai keabsahan suatu dokumen digital. Tanda tangan digital bukan berarti tanda tangan fisik yang di-scan atau digambar di komputer kemudian ditempelkan di dokumen, melainkan perhitungan matematis menggunakan konsep kriptografi kunci publik atas data digital yang ditandatangani. Terdapat dua kegiatan dalam konsep tanda tangan digital:</p>

				<ol className="list-decimal my-4 ml-10 text-neutral-500 space-y-0.5">
					<li><b className="text-neutral-400">Sign</b>, yaitu kegiatan membubuhkan tanda tangan digital pada dokumen.</li>
					<li><b className="text-neutral-400">Verify</b>, yaitu kegiatan menentukan apakah tanda tangan digital pada dokumen valid.</li>
				</ol>

				<p className="text-neutral-500">Berikut ini merupakan tujuan dari diterapkannya tanda tangan digital pada suatu dokumen yang merupakan manfaat dari kriptografi kunci publik:</p>

				<ol className="list-decimal my-4 ml-10 text-neutral-500 space-y-0.5">
					<li><b className="text-neutral-400">Otentikasi</b>, yaitu memastikan bahwa dokumen memang ditandatangani oleh penanda tangan yang sah. Hanya pemilik tanda tangan tertentu yang dapat membubuhkan tanda tangannya pada dokumen.</li>
					<li><b className="text-neutral-400">Integritas</b>, yaitu memastikan bahwa dokumen tidak diubah setelah ditandatangani. Jika dokumen diubah sekecil apapun, tanda tangan digital otomatis menjadi tidak valid.</li>
					<li><b className="text-neutral-400">Non-repudiasi</b>, yaitu memastikan bahwa penanda tangan tidak dapat menyangkal bahwa ia telah membubuhkan tanda tangan pada suatu dokumen.</li>
				</ol>

				<p className="text-neutral-500">
					Tanda tangan digital hanya dapat diverifikasi dari file dokumen digital. Jika dokumen digital tersebut dicetak, tanda tangan digital tidak lagi dapat diverifikasi. Meskipun demikian, IPB DiSign dapat melakukan <Link href="https://digisign.ipb.ac.id/Verify/Qr" className="text-gold">scan QR code</Link> yang tertera pada tanda tangan yang dihasilkan untuk mengecek penanda tangan dokumen yang dikeluarkan oleh IPB DiSign.
				</p>

				<br />

				<p className="text-neutral-500">Penggunaan tanda tangan digital di lingkungan IPB University diatur dalam Surat Keputusan Rektor IPB Nomor 241/IT3/TU/2020 Tentang Penggunaan Tanda Tangan Elektronik pada Dokumen Dinas di Lingkungan Institut Pertanian Bogor. Salinan Surat Keputusan tersebut dapat diunduh <a target={"_blank"} href="/files/SK_Rektor_241-IT3-TU-2020.pdf" className="text-gold">di sini.</a></p>

				<h2 className="text-2xl my-5">Tanda Tangan Digital</h2>
				<ul className="list-disc space-y-1 text-neutral-500 ml-10">
					<li>Standar: CMS (Cryptographic Message Syntax)</li>
					<li>Algoritme: RSA-SHA256</li>
					<li>Panjang kunci: 2048 bit</li>
				</ul>
			</div>

			<Footer />
		</>
	);
}

export default About;