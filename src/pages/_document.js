import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
				<Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
      </body>
    </Html>
  )
}
