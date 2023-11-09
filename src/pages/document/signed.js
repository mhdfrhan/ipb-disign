import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

const Signed = () => {
	return (
		<Layout title={"Dokumen Ditandatangani"}>
			<Head>
				<title>Dokumen Ditandatangani</title>
			</Head>

			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8">
				<p className="text-[#C5E1FC]">
					Seluruh dokumen yang sudah Anda tanda tangani ditampilkan pada halaman ini.
				</p>
			</div>

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4">
				<div className="mb-6 sm:flex sm:items-center sm:justify-between">
					<h3 className="text-xl mb-4 sm:mb-0">Daftar Dokumen</h3>
					<div className="text-right sm:text-left">
						<Link href={"/document/upload"} className="py-1.5 px-3.5 bg-gold text-white text-sm rounded-lg hover:opacity-80">Unggah Dokumen</Link>
					</div>
				</div>
				<div className="sm:flex sm:items-center sm:justify-between mb-6">
					<div className="flex items-center gap-2 text-sm text-neutral-500 mb-4 sm:mb-0">
						Show
						<select className="input-form !w-20">
							<option>10</option>
							<option>25</option>
							<option>50</option>
							<option>100</option>
						</select>
					</div>
					<div>
						<input
							type="text"
							placeholder="Cari..."
							className="input-form"
						/>
					</div>
				</div>
				<div className="w-full overflow-x-auto">
					<div className="min-w-max">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Judul</th>
									<th scope="col">Upload</th>
									<th scope="col">Ditandatangani</th>
									<th scope="col">Sertifikat</th>
									<th scope="col" className="!text-right">Aksi</th>
								</tr>
							</thead>
							<tbody>
								{...Array(10).fill(0).map((_, i) => (
									<tr key={i}>
										<td className="pt-5 px-4 text-center !text-[#7E7E7E]">{i + 1}</td>
										<td>Proposal PDCA XI FIX</td>
										<td>02, Okt 2023 - 10.50</td>
										<td>04, Okt 2023 - 14.50</td>
										<td>EMG01U4S4C</td>
										<td>
											<div className="flex items-center justify-end gap-2">
												<button className="px-2 py-1 bg-[#043667] hover:bg-opacity-80 text-white rounded-lg text-xs inline-flex items-center gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
													</svg>

													Unduh PDF
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-10 sm:flex sm:items-center sm:justify-between">
					<div>
						<span className="block text-sm text-neutral-600 text-center sm:text-left">Showing 1 to 10 of 80 entries</span>
					</div>
					<nav className="flex items-center gap-x-1 mt-4 justify-center">
						<button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border  hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none border-transparent text-neutral-600 hover:text-white hover:bg-neutral-800/60 focus:bg-white/10">
							<svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
							<span aria-hidden="true" className="sr-only">Previous</span>
						</button>
						<div className="flex items-center gap-x-1">
							<button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-neutral-50 disabled:opacity-50 disabled:pointer-events-none bg-gold border-gold text-white focus:bg-white/10" aria-current="page">1</button>
							<button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border hover:bg-neutral-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none border-transparent text-neutral-600 hover:text-white hover:bg-neutral-800/60 focus:bg-white/10">2</button>
							<button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border hover:bg-neutral-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none border-transparent text-neutral-600 hover:text-white hover:bg-neutral-800/60 focus:bg-white/10">3</button>
							<button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border hover:bg-neutral-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none border-transparent text-neutral-600 hover:text-white hover:bg-neutral-800/60 focus:bg-white/10">...</button>
							<button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border hover:bg-neutral-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none border-transparent text-neutral-600 hover:text-white hover:bg-neutral-800/60 focus:bg-white/10">8</button>
						</div>
						<button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 disabled:opacity-50 disabled:pointer-events-none border-transparent text-neutral-600 hover:text-white hover:bg-neutral-800/60 focus:bg-white/10">
							<span aria-hidden="true" className="sr-only">Next</span>
							<svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
						</button>
					</nav>
				</div>
			</div>
		</Layout>
	);
}

export default Signed;