"use client"

import '@/styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos';

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
