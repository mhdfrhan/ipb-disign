"use client"

import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Aos from "aos";
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('preline')

		Aos.init({
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
