import Head from 'next/head' //use instead of head
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * 
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Hi Lo!</title>
          <meta name='description' content='Simple game where we guess if the right card percentage is higher or lower than the left'/>
          <meta name='robots' content='index, follow'/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/hilo.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/hilo.png"/>
          <link rel="manifest" href="/favicon_package/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>

        <GlobalStyle />

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}
