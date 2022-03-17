import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'


export default function DisplayDocs() {

    const doc = (

        <div class="grid-cols-2 h-md shadow-md text-4xl py-4 px-5 text-[#939694] hover:bg-black hover:text-white">
    <div class="grid grid-cols-2 gap-4">
      <div>English Essay</div>
      <div class="text-2xl text-right">3.10.22</div>
    </div>
  </div>


    )




    return (

        <section className='bg-white pb-10 px-10 md:px-0'>
        <div className="max-w-3xl mx-auto py-8 text-sm">
            <div className='flex items-center justify-between pb-5'>
                <h2 className='font-medium flex-grow'>My Docs</h2>
                <p className='mr-12 items-center'>Date Created</p>
                <Icon name="folder" size="3xl" color="black"></Icon>
            </div>
            </div>

            <div class="grid grid-rows-100 grid-col-1 gap-0">
            </div>
        </section>
    )
    }