import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "@material-tailwind/react/tailwind.css";
import 'material-icons/iconfont/material-icons.css';
import { SessionProvider } from "next-auth/react"

// Like a global starting point or the app, like App.js in React
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return(
    <div>
      <Head>

      </Head>
      <SessionProvider session={session}>
    <Component {...pageProps} />  
    </SessionProvider>
    </div>

  ) 
}

export default MyApp
