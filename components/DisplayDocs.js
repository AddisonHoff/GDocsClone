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
        <div className='h-screen bg-slate-900'>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

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
        </div>
    )
    }