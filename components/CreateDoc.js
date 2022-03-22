import React, { useState } from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'

import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'

import { getSession, useSession } from 'next-auth/client'
import { db } from '../firebase'
import firebase from 'firebase'

export default function CreateDoc() {

    const [session] = useSession()
    const [showModal, setShowModal] = useState(false)
    const [input, setInput] = useState('')
    
    
    function refreshPage() {
        window.location.reload(false);
      }

    const createDocument = () => {
        if (!input) return

        db.collection('userDocs').doc(session.user.email).collection('docs').add(
            {
                fileName: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }          
        )

        setInput('')

        refreshPage()
    }




    return (
        <div class="min-h-1/2 bg-slate-900  border border-gray-900">

        <div class="max-w-6xl sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">


            <h1 class="text-white text-2xl">Create A Doc</h1>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter " && createDocument()}
            class="w-full p-2 rounded-md  border border-gray-700 focus:border-blue-700"
                placeholder="Correo" type="email" name="correo" id=""></input>

            <input
                            onClick={createDocument}

            class="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 "
                type="submit" name="correo" id=""></input>
        </div>


    </div>
    )
    }