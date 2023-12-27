import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '..'

/*
const temporalAsync = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 2000)
    })
}
*/

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
    //await temporalAsync()

    console.log('Navbar creado!')
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
            <Link href="/">
                <HomeIcon />
                <span className='ml-2'>Home</span>
            </Link>
            <div className='flex flex-1'></div>
            {
                navItems.map((p, index) => (<ActiveLink key={index} {...p} />))
            }
        </nav>
    )
}
