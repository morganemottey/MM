import React from 'react'
import Head from 'next/head'
import Contact from '../components/contact.js'
import favico from '../public/favicon.ico'

export default function contact() {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href={favico} type="image/x-icon" />
                <title>Contact | M | M</title>
            </Head>
            <Contact/>
        </div>
    )
}
