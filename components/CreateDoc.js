import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'

export default function CreateDoc() {
    return (
        <section className='bg-black pb-10 px-10'>
        <div className="max-w-3xl mx-auto">
            <div className='flex items-center py-6 justify-between'>
                <h2 className='text-white text-lg'>Start a new document</h2>

                <Button
                color="white"
                buttonType="outline"
                iconOnly={true}
                ripple="dark"
                className="border-0">
                    <Icon name="more_vert" size="3xl" color="white"></Icon>
                </Button>
                </div>
                
                <div className='relative h-52 w-40 border-0 hover:border-4 border-black  cursor-pointer'>
                        <Image src="/new.png"
                        layout="fill"
                        ></Image>
                    </div>
                    <p className=' mt-2 font-semibold text-white'>Blank</p>
            </div>
        </section>
    )
    }