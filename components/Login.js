import React from 'react'

import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'

import { signIn } from 'next-auth/client'

export default function Login() {
 
 
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <Image
    src="/logo.png"
    height="300"
    width="550"
    objectFit="contain"
    ></Image>
    <Button
    className="w-44 my-10 text-white"
    color="blue"
    buttonType="filled"
    ripple="dark"
    onClick={signIn}
    >Login</Button>
    </div>
  )

}
