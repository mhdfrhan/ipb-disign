import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
				<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      </body>
    </Html>
  )
}
