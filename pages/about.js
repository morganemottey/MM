import React from 'react'
import Head from 'next/Head'
import About from '../components/About'
import favico from '../public/favicon.ico'

export default function about() {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href={favico} type="image/x-icon" />
                <title>About | M | M</title>
            </Head>
            <About />
        </div>
    )
}
