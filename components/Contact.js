
import React, { Component } from 'react'
import me from '../images/momo.png'
export default class Contact extends Component {

      render() {
            return (
                  <>
                        <div className="wrapper">
                             <div className="contact_form">
                                    <div className="address_info">
                                         <p className="contact_title"></p>
                                         <p className="info">132 rue Pierre Corneille <br/>69003 Lyon</p>
                                         <div className="line"></div>
                                         <p className="contact_title"></p>
                                         <p className="info">morgane.mottey@gmail.com</p>
                                         <div className="line"></div>
                                         <p className="contact_title"></p>
                                         <p className="info">0782723690</p>
                                         <div className="line"></div>
                                   </div>
                                   <img src={me} alt="me" width="300"/>
                             </div> 
                        </div>
                        <button type="submit" name="submit" id="contact-submit" className="send wow fadeInUp"><a className="send_message" href="mailto:morgane.mottey@gmail.com">Send Message</a></button>

                  </>
            )
      }
}





