import Head from "next/head";
import Link from "next/link";

const { default: Layout } = require("@/components/Layout")

const DigitalCertificate = () => {
	return (
		<Layout title={"Sertifikat Digital"}>
			<Head>
				<title>Sertifikat Digital</title>
			</Head>

			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8">
				<h1 className="text-2xl lg:text-3xl">Informasi</h1>
				<p className="mt-2.5 text-[#C5E1FC]">
					Sertifikat Digital merupakan identitas Anda di sistem untuk membuat tanda tangan digital. Anda hanya dapat memiliki satu sertifikat yang aktif dalam satu waktu. Jika Anda membuat sertifikat baru, sertifikat lama akan dinonaktifkan (revoked) secara otomatis. Anda juga dapat menonaktifkan suatu sertifikat secara manual
				</p>
			</div>

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4">
				<div className="mb-6 sm:flex sm:items-center sm:justify-between">
					<h3 className="text-xl mb-4 sm:mb-0">Daftar Sertifikat</h3>
					<div className="text-right sm:text-left">
						<Link href={"/document/upload"} className="py-1.5 px-3.5 bg-gold text-white text-sm rounded-lg hover:opacity-80">Buat Sertifikat</Link>
					</div>
				</div>

				<div className="w-full overflow-x-auto">
					<div className="min-w-max">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Serial Number</th>
									<th scope="col">Subject </th>
									<th scope="col">Valid Time</th>
									<th scope="col">Dibuat</th>
									<th scope="col">Status</th>
									<th scope="col" className="!text-right">Aksi</th>
								</tr>
							</thead>
							<tbody>
								{...Array(10).fill(0).map((_, i) => (
									<tr key={i}>
										<td className={`pt-5 px-4 text-center ${i !== 0 ? 'opacity-40' : ''}`}>{i + 1}</td>
										<td className={`${i !== 0 ? 'opacity-40' : ''}`}>EMG01U4S4C</td>
										<td className={`${i !== 0 ? 'opacity-40' : ''}`}>Lorem ipsum dolor sit amet.</td>
										<td className={`${i !== 0 ? 'opacity-40' : ''}`}>
											5 Okt 2023 - 4 Okt 2024
										</td>
										<td className={`${i !== 0 ? 'opacity-40' : ''}`}>5 Okt 2023 - 10.50</td>
										<td className={`${i !== 0 ? 'opacity-40' : ''}`}>
											<div className={`py-0.5 px-2 rounded-full text-xs text-center ${i == 0 ? "bg-green-800" : "bg-red-800"} text-white text-sm`}>{i == 0 ? "Active" : "Revoked"}</div>
										</td>
										<td>
											{i == 0 ? (
												<div className="flex items-center justify-end gap-1">
													<button className="px-2 py-1 bg-red-800 hover:bg-opacity-80 text-white rounded-lg inline-flex items-center gap-2 text-sm">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
															<path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
														</svg>

														Revoke
													</button>
												</div>
											): (
												<div></div>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default DigitalCertificate;