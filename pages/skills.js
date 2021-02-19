import React from 'react'
import Head from 'next/head'
import Skills from '../components/Skills'
import favico from '../public/favicon.ico'

function skills() {
    return (
        <div>
           <Head>
                <link rel="shortcut icon" href={favico} type="image/x-icon" />
                <title>Skills | M | M</title>
            </Head>
            <Skills /> 
        </div>
    )
}

export default skills
