import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Upload = () => {

	const [columns, setColumns] = useState([{ id: 1 }]);
	const [message, setMessage] = useState(false);
	const router = useRouter()

	const tambahPenandaTangan = (e) => {
		e.preventDefault();
		const lastId = columns[columns.length - 1].id;
		setColumns([...columns, { id: lastId + 1 }]);
	};

	const hapusPenandaTangan = (id) => {
		const updatedColumns = columns.filter(column => column.id !== id);
		setColumns(updatedColumns);
	};

	const handleSubmit = (e) => {
		e.preventDefault()

		window.scrollTo(0, 0)

		setMessage(true)
		setTimeout(() => {
			setMessage(false)
		}, 3000);
	}

	return (
		<Layout title={"Upload Dokumen"}>
			<Head>
				<title>Upload Dokumen</title>
			</Head>

			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8">
				<h1 className="text-2xl lg:text-3xl">Informasi</h1>
				<p className="mt-2.5 text-[#C5E1FC]">
					Di halaman ini Anda dapat mengunggah satu atau lebih dokumen untuk ditandatangani oleh satu atau lebih penanda tangan. Orang yang Anda minta untuk menandatangani dokumen akan mendapat notifikasi melalui e-mail. Jika Anda hendak menandatangani suatu dokumen oleh Anda sendiri, gunakan <Link href="/signin/create" className="underline">halaman ini</Link> <br /><br />

					Ukuran maksikum file 25 MB.
				</p>

			</div>

			{message && (
				<div className="my-4 py-3 bg-green-800 text-green-200 rounded-xl px-6">
					Dokumen berhasil ditambahkan!
				</div>
			)}

			<form onSubmit={handleSubmit}>
				<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4">
					<h3 className="text-xl mb-6">Unggah Dokumen</h3>
					<div className="flex flex-wrap -mx-5">
						<div className="w-full md:w-1/3 px-5">
							<label htmlFor="dokumen" className="label">Dokumen (PDF)</label>
						</div>
						<div className="w-full md:w-2/3 px-5">
							<div>
								<label htmlFor="dokumen" className="p-6 border-2 border-dashed rounded-2xl border-neutral-800 bg-neutral-900 h-52 flex items-center justify-center text-neutral-600 text-center cursor-pointer hover:border-neutral-700 duration-300">
									<h6 className="text-lg">Drag and Drop berkas anda disini... <br /> <br /> (atau klik untuk memilih satu atau lebih berkas)</h6>
								</label>
								<input type="file" className="hidden" id="dokumen" />
							</div>
							<div className="mt-5">
								<label htmlFor="dokumen-2" className="sr-only">Label</label>
								<div className="flex items-center rounded-lg shadow-sm">
									<input type="file" id="dokumen-2" name="dokumen-2" className="input-form !rounded-r-none file:hidden text-neutral-600 text-sm !py-3" />
									<label htmlFor="dokumen-2" className="py-3 cursor-pointer px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-r-lg bg-gold text-white hover:opacity-80 shrink-0">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 shrink-0">
											<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
										</svg>

										Pilih berkas...
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-5 mt-6">
						<div className="w-full md:w-1/3 px-5">
							<label className="label">Nama Dokumen</label>
						</div>
						<div className="w-full md:w-2/3 px-5">
							<div className="text-sm text-white">(otomatis berdasarkan nama file) </div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-5 mt-6">
						<div className="w-full md:w-1/3 px-5">
							<label className="label">Urutan</label>
						</div>
						<div className="w-full md:w-2/3 px-5">
							<div className="text-sm text-neutral-600 flex items-center gap-3 group">
								<input type="checkbox" id="rule" className="w-4 h-4 bg-neutral-900 border border-neutral-800 rounded group-hover:border-neutral-700 duration-300 cursor-pointer checked:text-gold focus:ring-gold focus:outline-gold" />
								<label htmlFor="rule" className="cursor-pointer select-none">Penandatanganan dokumen harus mengikuti aturan</label>
							</div>
						</div>
					</div>
				</div>

				<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl">
					<div className="mb-6">
						<h3 className="text-xl">Daftar Penanda Tangan</h3>
						<p className="text-sm mt-2 text-neutral-600">Isikan dengan benar karena tidak dapat diubah lagi setelah disimpan</p>
					</div>
					<div className="w-full overflow-x-auto">
						<div className="min-w-max">
							<table className="w-full border-collapse table-auto">
								<thead>
									<tr>
										<th className="text-sm text-neutral-600 text-left py-3 pr-4">Penanda Tangan</th>
										<th className="text-sm text-neutral-600 text-left py-3 px-4">No Halaman</th>
										<th className="py-3 pl-4">
											<button onClick={tambahPenandaTangan} className="w-8 h-8 flex items-center justify-center bg-green-800 rounded-lg">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
												</svg>
											</button>
										</th>
									</tr>
								</thead>
								<tbody>
									{columns.map((column) => (
										<tr key={column.id}>
											<td className="pr-4 pb-4">
												<input type="text" className="input-form" />
											</td>
											<td className="px-4 pb-4">
												<input type="number" className="input-form !w-44" />
											</td>
											<td className="pl-4">
												<button onClick={() => hapusPenandaTangan(column.id)} className="w-8 h-8 flex items-center justify-center bg-red-800 rounded-lg">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
														<path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
													</svg>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					<div className="mt-4">
						<button type="submit" className="w-full py-3 text-center text-sm bg-gold rounded-2xl">Simpan</button>
					</div>
				</div>

			</form>
		</Layout>
	);
}

export default Upload;