import React from 'react'
import Head from 'next/Head'
import Contact from '../components/Contact'

export default function contact() {
    // const createHandleForm = (data) => {
    //     alert(JSON.stringify(data))
    // }
    return (
        <div>
            <Head>
                <title>Contact | M | M</title>
            </Head>
            <Contact/>
        </div>
    )
}
