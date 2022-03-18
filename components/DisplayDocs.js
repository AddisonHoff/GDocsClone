import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'
import DocumentRow from './DocumentRow'

import firebase from 'firebase'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import { getSession, useSession } from 'next-auth/client'
import { db } from '../firebase'



export default function DisplayDocs() {

    const [session] = useSession();


    const [snapshot] = useCollectionOnce(db.collection('userDocs').doc(session.user.email).collection('docs').orderBy('timestamp', 'desc'))






    return (

        <section className='max-w-3xl mx-auto bg-white pb-10 px-10 md:px-0'>

            <div class="grid grid-rows-100 grid-col-1 gap-0">
            <div class="grid grid-cols-2 gap-4 border-separate border-b-4">
                <h1 class="text-black text-xl font-bold font-sans py-5 px-36">Your Docs</h1>
                <h1 class="text-black text-xl font-bold font-sans py-5 text-right px-36">Date Created</h1>
            </div>
            {snapshot?.docs.map(doc => (
                <DocumentRow
                key={doc.id}
                id={doc.id}
                fileName={doc.data().fileName}
                date={doc.data().timestamp}
                >
                </DocumentRow>
            ))}

                </div>
            
        </section>
    )
    }