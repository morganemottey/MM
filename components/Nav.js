import React from 'react'
import Link from 'next/link'

const Nav = () =>{
    return (
    <nav>
        <span id="brand">
            <Link href="/">
                <div className="content">
                    <div className="random">
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                        <span className="nbr ltr">0</span>
                    </div>
                </div>
            </Link>
        </span>

        <ul id="menu">
            <li><Link href="/"><a>home<span>.</span></a></Link></li>
            <li><Link href="/work"><a>work<span>.</span></a></Link></li>
            <li><Link href="/about"><a>about me<span>.</span></a></Link></li>
            <li><Link href="/contact"><a>contact<span>.</span></a></Link></li>
        </ul>

        <div id="toggle">
            <div className="span">menu</div>
        </div>
        <div id="resize">

        <div class="close-btn">close</div>

        <ul id="menu">
            <li><Link href="/"><a>home<span>.</span></a></Link></li>
            <li><Link href="/work"><a>work<span>.</span></a></Link></li>
            <li><Link href="/about"><a>about me<span>.</span></a></Link></li>
            <li><Link href="/contact"><a>contact<span>.</span></a></Link></li>
        </ul>
        </div>
    </nav>
    )
}

export default Nav
