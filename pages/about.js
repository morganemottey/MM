import React from 'react'
import Head from 'next/Head'
import About from '../components/About'

export default function about() {
    return (
        <div>
            <Head>
                <title>About | M | M</title>
            </Head>
            <About />
        </div>
    )
}