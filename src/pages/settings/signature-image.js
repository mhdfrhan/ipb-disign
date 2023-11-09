import Head from "next/head";
import { useState } from "react";
import ReactSignatureCanvas from "react-signature-canvas";

const { default: Layout } = require("@/components/Layout")

const SignatureImage = () => {
	const [message, setMessage] = useState(false);
	const [sign, setSign] = useState()
	const [paraf, setParaf] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()

		window.scrollTo(0, 0)

		setMessage(true)
		setTimeout(() => {
			setMessage(false)
		}, 3000);
	}

	const clearSignature = () => {
		sign.clear()
	}

	const clearParaf = () => {
		paraf.clear()
	}

	return (
		<Layout title={"Gambar Tanda Tangan"}>
			<Head>
				<title>Gambar Tanda Tangan</title>
			</Head>

			<div className="p-8 bg-gradient-to-tl from-[#043667] to-[#032B52] rounded-3xl mb-8">
				<h1 className="text-2xl lg:text-3xl">Informasi</h1>
				<p className="mt-2.5 text-[#C5E1FC]">
					Anda dapat mengupload gambar hasil scan tanda tangan Anda (JPG atau PNG) pada halaman ini untuk ditempelkan di dokumen. Pastikan gambar tanda tangan cukup jelas, memiliki kontras yang baik, dan berlatar belakang putih bersih atau transparan. Anda juga dapat menggambar tanda tangan menggunakan mouse, pen tablet, atau alat petunjuk lainnya
				</p>
			</div>

			{message && (
				<div className="my-4 py-3 bg-green-800 text-green-200 rounded-xl px-6">
					Berhasil menambahkan tanda tangan dan paraf
				</div>
			)}

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4">
				<h3 className="text-xl mb-6">Tanda Tangan Saya</h3>
				<div className="flex flex-wrap -mx-3">
					<div className="w-full sm:w-1/2 px-3">
						<div className="p-6 border border-neutral-800 bg-neutral-900 rounded-xl">
							<div className="flex items-start justify-between">
								<div>
									<h6>Tanda Tangan</h6>
									<span className="block text-sm text-neutral-600 mt-1">Senin, 06 November 2023</span>
								</div>
								<button className="py-1.5 px-3 text-sm text-white bg-red-800 rounded-lg hover:opacity-80">Hapus</button>
							</div>
							<div className="mt-6">
								<img src="/img/signature/1.png" className="mx-auto" />
							</div>
						</div>
					</div>
					<div className="w-full sm:w-1/2 px-3">
						<div className="p-6 border border-neutral-800 bg-neutral-900 rounded-xl">
							<h6>Paraf</h6>
							<span className="block text-sm text-neutral-600 mt-1">Anda belum memiliki gambar paraf. Silahkan upload atau gambar pada form dibawah.</span>
						</div>
					</div>
				</div>
			</div>

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4">
				<h3 className="text-xl mb-6">Upload Tanda Tangan dan Paraf</h3>
				<form onSubmit={handleSubmit}>
					<div className="grid sm:grid-cols-2 gap-6">
						<div>
							<label htmlFor="signature" className="label">Tanda Tangan</label>
							<input type="file" id="signature" className="input-form file:text-sm file:bg-gold file:text-white file:border-0 file:rounded-full file:py-1 file:px-4 file:mr-4 hover:file:bg-gold/80 file:duration-300 text-neutral-600 hover:text-white" required />
						</div>
						<div>
							<label htmlFor="paraf" className="label">Paraf</label>
							<input type="file" id="paraf" className="input-form file:text-sm file:bg-gold file:text-white file:border-0 file:rounded-full file:py-1 file:px-4 file:mr-4 hover:file:bg-gold/80 file:duration-300 text-neutral-600 hover:text-white" required />
						</div>
					</div>
					<div className="mt-7">
						<button type="submit" className="w-full py-3 text-center text-sm bg-gold rounded-2xl">Upload</button>
					</div>
				</form>
			</div>

			<div className="p-8 bg-gradient-to-tl to-[#141414] from-[#151515] rounded-3xl mb-4">
				<h3 className="text-xl mb-6">Coret Tanda Tangan dan Paraf</h3>
				<form onSubmit={handleSubmit}>
					<div className="grid sm:grid-cols-2 gap-6">
						<div>
							<div className="flex items-center justify-between mb-4">
								<label htmlFor="signature-2" className="label select-none !mb-0">Tanda Tangan</label>
								<button onClick={clearSignature} type="button" className="text-sm text-white bg-red-800 px-3 py-1 rounded-lg">Clear</button>
							</div>
							<div className="border border-neutral-800 bg-neutral-900 rounded-xl overflow-hidden">
								<ReactSignatureCanvas penColor='white'
									canvasProps={{ className: 'sigCanvas' }} ref={data => setSign(data)} />
							</div>
						</div>
						<div>
						<div className="flex items-center justify-between mb-4">
								<label htmlFor="paraf-2" className="label select-none !mb-0">Paraf</label>
								<button onClick={clearParaf} type="button" className="text-sm text-white bg-red-800 px-3 py-1 rounded-lg">Clear</button>
							</div>
							<div className="border border-neutral-800 bg-neutral-900 rounded-xl overflow-hidden">
								<ReactSignatureCanvas penColor='white'
									canvasProps={{ className: 'sigCanvas' }} ref={data => setParaf(data)} />
							</div>
						</div>
					</div>
					<div className="mt-7">
						<button type="submit" className="w-full py-3 text-center text-sm bg-gold rounded-2xl">Simpan</button>
					</div>
				</form>
			</div>
		</Layout>
	);
}

export default SignatureImage;