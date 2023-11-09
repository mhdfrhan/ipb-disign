import Layout from '@/components/Layout'
import '@/styles/globals.css'
import AOS from "aos";
import { useEffect } from 'react'



export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('preline')

		AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
			duration: 800
    });
	}, [])

	return (
		<Component {...pageProps} />
	)
}
