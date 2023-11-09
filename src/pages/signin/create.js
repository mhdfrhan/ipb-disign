import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

const Create = () => {

	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault()

		window.scrollTo(0, 0)

		setMessage(true)
		setTimeout(() => {
			setMessage(false)
		}, 3000);
	}

	return (
		<Layout title={"Tanda Tangani Dokumen"}>
			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8" data-aos="fade-up">
				<h1 className="text-2xl lg:text-3xl">Informasi</h1>
				<p className="mt-2.5 text-[#C5E1FC]">Unggah dokumen PDF untuk Anda tanda tangani sendiri. Ukuran maksimum dokumen 25 MB.</p>
			</div>

			{message && (
				<div className="my-4 py-3 bg-green-800 text-green-200 rounded-xl px-6">
					Dokumen berhasil ditambahkan!
				</div>
			)}

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4" data-aos="fade-up" data-aos-delay="100">
				<h3 className="text-xl mb-6">Unggah Dokumen</h3>
				<form onSubmit={handleSubmit}>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label htmlFor="sertif" className="label">Sertifikat Digital</label>
							<input type="text" id="sertif" className="input-form" />
						</div>
						<div>
							<label htmlFor="pw_sertif" className="label">Password Sertifikat</label>
							<input type="text" id="pw_sertif" className="input-form" />
						</div>
						<div>
							<label htmlFor="dokumen" className="label">Dokumen (PDF)</label>
							<input type="file" id="dokumen" className="input-form file:text-sm file:bg-gold file:text-white file:border-0 file:rounded-full file:py-1 file:px-4 file:mr-4 hover:file:bg-gold/80 file:duration-300 text-neutral-600 hover:text-white" />
						</div>
						<div>
							<label className="label">Nama Dokumen</label>
							<div className="text-sm text-white">(otomatis berdasarkan nama file) </div>
						</div>
					</div>
					<div className="mt-7">
						<button type="submit" className="w-full py-3 text-center text-sm bg-gold rounded-2xl">Selanjutnya</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default Create;