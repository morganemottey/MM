import React from 'react'
import Head from 'next/head'
import Projects  from '../components/projects.js'
import favico from '../public/favicon.ico'

export default function about() {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href={favico} type="image/x-icon" />
                <title>Projects | M | M</title>
            </Head>
            <Projects/>
        </div>
    )
}
