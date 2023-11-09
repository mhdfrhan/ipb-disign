import Layout from "@/components/Layout";

const Request = () => {
	return (
		<Layout title={"Permintaan Penandatanganan"}>
			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8" data-aos="fade-up">
				<p className="text-[#C5E1FC]">Berikut ini daftar dokumen yang perlu Anda tanda tangani. Anda harus melakukan persetujuan terlebih dahulu untuk dapat mulai menandatangani dokumen.</p>
			</div>

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4" data-aos="fade-up" data-aos-delay="100">
				<h3 className="text-xl mb-6">Daftar Dokumen</h3>
				<div className="w-full overflow-x-auto">
					<div className="min-w-max">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Judul</th>
									<th scope="col">Upload</th>
									<th scope="col">Persetujuan</th>
									<th scope="col" className="!text-right">Aksi</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td colSpan={5} className="text-center pt-5 px-4 text-[#9F5C5C]">Belum ada permintaan</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl" data-aos="fade-up" data-aos-delay="150">
				<h3 className="text-xl">Daftar Dokumen Ditolak</h3>
			</div>
		</Layout>
	);
}

export default Request;