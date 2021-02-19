import React from 'react'
import Head from 'next/head'
import Experiences from '../components/experiences.js'
import favico from '../public/favicon.ico'

function experiences() {
    return (
        <div>
           <Head>
                <link rel="shortcut icon" href={favico} type="image/x-icon" />
                <title>Experiences | M | M</title>
            </Head>
            <Experiences /> 
        </div>
    )
}

export default experiences
