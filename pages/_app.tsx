import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@material-tailwind/react/tailwind.css";

// Like a global starting point or the app, like App.js in React
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
