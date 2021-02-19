import React from 'react'
import Head from 'next/head'
import Hobbies from '../components/hobbies.js'
import favico from '../public/favicon.ico'

function hobbies() {
    return (
        <div>
           <Head>
                <link rel="shortcut icon" href={favico} type="image/x-icon" />
                <title>Hobbies | M | M</title>
            </Head>
            <Hobbies /> 
        </div>
    )
}

export default hobbies
