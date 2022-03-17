import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@material-tailwind/react/tailwind.css";
import { Provider } from 'next-auth/client'


// Like a global starting point or the app, like App.js in React
function MyApp({ Component, pageProps }: AppProps) {
  return (

  // By wrapping our components in provider every component will have access to session via Provider
  <Provider session={pageProps.session}> 
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
