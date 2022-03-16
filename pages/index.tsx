import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import CreateDoc from '../components/CreateDoc'
import DisplayDocs from '../components/DisplayDocs'
import Login from '../components/Login'

// Next Auth
import { getSession, useSession } from 'next-auth/react'


const Home: NextPage = () => {

  const { data: session } = useSession()

  // If no user is signed in, show login component 
  if (!session) {
    return(<Login></Login>)
  }

  return (
    <div>
      <Head>
        <title>Divination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <CreateDoc></CreateDoc>
      <DisplayDocs></DisplayDocs>
    </div>
  )

}

export default Home
