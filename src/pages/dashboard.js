import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
	const [greeting, setGreeting] = useState("")

	useEffect(() => {
		const currentTime = new Date().getHours()

		if (currentTime < 12) {
			setGreeting("Selamat Pagi")
		} else if (currentTime < 16) {
			setGreeting("Selamat Siang")
		} else if (currentTime < 18) {
			setGreeting("Selamat Sore")
		} else if (currentTime < 24) {
			setGreeting("Selamat Malam")
		}
	}, [])

	return (
		<Layout title={"Beranda"}>
			<Head>
				<title>Beranda</title>
			</Head>

			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8">
				<h1 className="text-2xl lg:text-3xl">{greeting}, Muhammad Farhan</h1>
				<p className="mt-2.5 text-[#C5E1FC]">Silahkan pilih kegiatan yang akan Anda lakukan di sistem.</p>
			</div>

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl overflow-hidden">
				<div className="flex flex-wrap items-start justify-between -mx-10 lg:divide-x lg:divide-neutral-800 gap-y-6">
					<div className="w-full md:w-1/2 lg:w-1/3 px-10">
						<img src="/icons/signature.svg" alt="Icon Signature" />
						<Link href={"/"} className="text-white leading-7 hover:text-gold duration-300 mt-5 block">
							Saya ingin mengunggah dokumen dan saya tanda tangani sendiri
						</Link>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-10 md:border-l border-neutral-800 lg:border-l-0 border-t border-b pt-5 pb-5 md:border-t-0 md:border-b-0 md:pt-0 md:pb-0">
						<img src="/icons/hand.svg" alt="Icon Hand" />
						<Link href={"/"} className="text-white leading-7 hover:text-gold duration-300 block mt-5">
							Saya ingin mengunggah dokumen dan meminta orang lain menandatangani
						</Link>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-10">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-[60px] h-[60px] text-[#747474]">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
						</svg>
						<Link href={"/"} className="text-white leading-7 hover:text-gold duration-300 block mt-5">
							Saya ingin melihat daftar dokumen yang perlu saya tanda tangani
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
}
