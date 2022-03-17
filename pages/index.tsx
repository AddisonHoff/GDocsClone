import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'material-icons/iconfont/material-icons.css';
import { getSession, useSession } from 'next-auth/client'

import Header from '../components/Header'
import CreateDoc from '../components/CreateDoc'
import DisplayDocs from '../components/DisplayDocs'
import Login from '../components/Login'

const Home: NextPage = () => {
  const [session] = useSession()

  if(!session) return(<Login></Login>)
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

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }

}


export default Home
