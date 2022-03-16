import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'


export default function DisplayDocs() {
    return (

        <section className='bg-white pb-10 px-10 md:px-0'>
        <div className="max-w-3xl mx-auto py-8 text-sm">
            <div className='flex items-center justify-between pb-5'>
                <h2 className='font-medium flex-grow'>My Docs</h2>
                <p className='mr-12 items-center'>Date Created</p>
                <Icon name="folder" size="3xl" color="black"></Icon>
            </div>
            </div>
        </section>
    )
    }