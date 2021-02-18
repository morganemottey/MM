
import React, { Component } from 'react'
import me from '../images/momo.png'
export default class Contact extends Component {

      render() {
            return (
                  <>
                        <div class="wrapper">
                             <div className="contact_form">
                                    <div className="address_info">
                                         <p class="contact_title">Address</p>
                                         <p className="info">132 rue Pierre Corneille <br/>69003 Lyon</p>
                                         <div className="line"></div>
                                         <p class="contact_title">Email</p>
                                         <p className="info">morgane.mottey@gmail.com</p>
                                         <div className="line"></div>
                                         <p class="contact_title">Phone Number</p>
                                         <p className="info">0782723690</p>
                                         <div className="line"></div>
                                   </div>
                                   <img src={me} alt="me" width="300"/>
                             </div>
                                    
                        </div>

                  </>
            )
      }
}





