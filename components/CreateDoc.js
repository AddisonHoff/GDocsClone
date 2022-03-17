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

    const createDocument = () => {
        if (!input) return

        db.collection('userDocs').doc(session.user.email).collection('docs').add(
            {
                fileName: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }          
        )

        setInput('')
        setShowModal(false)
    }

    const modal = (
        <Modal 
        size="sm"
        active={showModal}
        toggler={() => setShowModal(false)}>

            <ModalBody>
           <input
           value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="outline-none w-full"
            placeholder="Enter name of document..."
            onKeyDown={(e) => e.key === "Enter " && createDocument()}
            >
            </input>
            </ModalBody>

            <ModalFooter>
                <Button
                color="black"
                buttonType="link"
                onClick={(e) => setShowModal(false)}
                ripple="dark"
                >
                    Cancel
                </Button>

                <Button 
                className="bg-black"
                color="black" 
                onClick={createDocument}
                ripple="light">
                    Create
                </Button>
            </ModalFooter>

        </Modal>

    )





    return (
        <section className='bg-black pb-10 px-10'>
        <div className="max-w-3xl mx-auto">
            <div className='flex items-center py-6 justify-between'>
                <h2 className='text-white text-lg'>Start a new document</h2>
                {modal}
                <Button
                color="white"
                buttonType="outline"
                iconOnly={true}
                ripple="dark"
                className="border-0">
                    <Icon name="more_vert" size="3xl" color="white"></Icon>
                </Button>
                </div>
                
                <div className='relative h-52 w-40 border-0 hover:border-4 border-black  cursor-pointer'
                onClick={()=> setShowModal(true)}
                >
                        <Image src="/new.png"
                        layout="fill"
                        ></Image>
                    </div>
                    <p className=' mt-2 font-semibold text-white'>Blank</p>
            </div>
        </section>
    )
    }