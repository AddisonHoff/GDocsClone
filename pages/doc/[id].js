import { useSession } from 'next-auth/client'
import Login from '../../components/Login'
import { useRouter } from 'next/dist/client/router'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'




export default function Doc() {

    const [session] = useSession()
    if (!session) return <Login > < /Login>

    const router = useRouter()
    const { id } = router.query

    const [snapshot, loadingSnapshot] = useDocumentOnce(
        db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
    )


    // Redirect user if they try to access URL they don't have access to
    if (!loadingSnapshot && !snapshot ? .data() ? .fileName) {
        router.replace("/")
    }

    return ( <
        div >
        <
        header className = 'flex justify-between items-center p-3 pb-1' >
        <
        button onClick = {
            () => Router.push('/') }
        class = "rounded-full focus:outline-none h-20 w-20 flex items-center justify-center" >
        <
        img src = '/logo.png'
        className = "pokeball"
        alt = "logo" / >
        <
        /button> <
        div className = "flex-grow px-2" >
        <
        h2 class >
        { snapshot ? .data() ? .fileName } < /h2> <
        /div>


        <
        /div> <
        /header > <
        h1 > TEST < /h1> <
        /div >
    )
}