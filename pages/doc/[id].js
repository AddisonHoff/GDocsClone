import { useSession, getSession } from 'next-auth/client'
import Login from '../../components/Login'
import { useRouter } from 'next/dist/client/router'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'
import Button from '@material-tailwind/react/Button'
import TextEditor from '../../components/TextEditor'



export default function Doc() {

    const [session] = useSession()
    if (!session) return <Login></Login>

    const router = useRouter()
    const { id } = router.query

    const [snapshot, loadingSnapshot] = useDocumentOnce(
        db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
    )


    // Redirect user if they try to access URL they don't have access to
    if (!loadingSnapshot && !snapshot?.data()?.fileName) {
        router.replace("/")
    }

    return (
        <div>
        <div>

        <header className="sticky top-0 z-50 flex items-center px-4 shadow-md bg-white">
            <div           onClick={() => router.push('/')}
                    className="ml-2 py-10 rounded-full focus:outline-none h-10 w-10 flex items-center justify-center hover:cursor-pointer">
         
                    <img src='/logo.png'
                        className="logo" alt="logo" />
                </div>
            {/* <Icon name="description" size="5xl" color="blue"></Icon> */}
            <h1 className='ml-2 text-black text-4xl font-semibold pr-5'>Divination</h1>

        </header>

        <TextEditor/>


        </div>

        </div >
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