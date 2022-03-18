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

            <table class="table-auto border-collapse w-full">
            <thead class="bg-black">
                <tr class="rounded-lg font-medium text-white text-center text-xl">
                <th class="px-4 py-2">Title</th>
                <th class="px-4 py-2">Views</th>
                </tr>
            </thead>
            <tbody class="text-sm font-normal text-gray-700 text-center">
            {snapshot?.docs.map(doc => (
                <DocumentRow
                key={doc.id}
                id={doc.id}
                fileName={doc.data().fileName}
                date={doc.data().timestamp}
                >
                </DocumentRow>
            ))}
            </tbody>
            </table>
    )
    }