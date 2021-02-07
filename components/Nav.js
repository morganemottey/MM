import Link from 'next/link'
import $ from 'jquery'
import React, { Component } from 'react'


export default class Nav extends Component {
    componentDidMount () {
        this.titleAnimation();
    }
    titleAnimation () {
        $(document).ready(function() {
            let $randomnbr = $('.nbr');
            let $timer = 30;
            let $it;
            let $data = 0;
            let index;
            let change;
            let letters = ["m", "o", "r", "g", "a", "n", "e", "|", "m", "o", "t", "t", "e", "y" ];
            $randomnbr.each(function() {
            change = Math.round(Math.random()*100);
            $(this).attr('data-change', change);
            });
    
            function random() {
                 return Math.round(Math.random()*9);
            };
        
            function select() {
                 return Math.round(Math.random()*$randomnbr.length+1);
            };
        
            function value() {
                 $('.nbr:nth-child('+select()+')').html(''+random()+'');
                 $('.nbr:nth-child('+select()+')').attr('data-number', $data);
                 $data++;
        
                 $randomnbr.each(function() {
                      if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                           index = $('.ltr').index(this);
                           $(this).html(letters[index]);
                           $(this).removeClass('nbr');
                      }
                 });
            };

            $it = setInterval(value, $timer);
        });
        
    }
    render() {
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
                <li><Link href="/projects"><a>work<span>.</span></a></Link></li>
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
                <li><Link href="/projects"><a>work<span>.</span></a></Link></li>
                <li><Link href="/about"><a>about me<span>.</span></a></Link></li>
                <li><Link href="/contact"><a>contact<span>.</span></a></Link></li>
            </ul>
            </div>
        </nav>
        )
    }
}
