import Layout from "@/components/Layout";
import Link from "next/link";

const Uploaded = () => {
	return (
		<Layout title={"Dokumen Diunggah"}>
			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8" data-aos="fade-up">
				<p className="text-[#C5E1FC]">
					Seluruh dokumen yang sudah Anda unggah ditampilkan pada halaman ini.
				</p>
			</div>

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4" data-aos="fade-up" data-aos-delay="100">
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
									<th scope="col">Tanggal Upload</th>
									<th scope="col">Penandatanganan</th>
									<th scope="col" className="!text-center">Ditolak</th>
									<th scope="col" className="!text-right">Aksi</th>
								</tr>
							</thead>
							<tbody>
								{...Array(10).fill(0).map((_, i) => (
									<tr key={i}>
										<td className="pt-5 px-4 text-center">{i + 1}</td>
										<td>Proposal PDCA XI FIX</td>
										<td>02, Okt 2023 - 10.50</td>
										<td>
											<div className="max-w-[6rem] mx-auto">
												<div className="py-1 w-full  bg-green-800 rounded-full"></div>
												<div className="text-[10px] text-center font-normal mt-px">1/1</div>
											</div>
										</td>
										<td className="text-center">0</td>
										<td>
											<div className="flex items-center justify-end gap-2">
												<button className="px-2 py-1 bg-green-800 hover:bg-opacity-80 text-white rounded-lg">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
														<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
													</svg>
												</button>
												<button className="px-2 py-1 bg-[#043667] hover:bg-opacity-80 text-white rounded-lg text-xs">
													Original
												</button>
												<button className="px-2 py-1 bg-[#043667] hover:bg-opacity-80 text-white rounded-lg text-xs">
													Signed
												</button>
												<button className="px-2 py-1 bg-red-800 hover:bg-opacity-80 text-white rounded-lg">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
													</svg>
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

export default Uploaded;