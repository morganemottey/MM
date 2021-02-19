
import React, { Component } from 'react'
import veggie from '../images/hobbies/broccoli.svg'
import tatoo from '../images/hobbies/tatoo-machine.svg'
import surf from '../images/hobbies/surf-board.svg'
import skate from '../images/hobbies/skateboard.svg'
import snow from '../images/hobbies/snowboard.svg'
import computer from '../images/hobbies/atom.svg'
import clothes from '../images/hobbies/clothes-hanger.svg'
import work from '../images/hobbies/coding.svg'
import data from '../images/hobbies/data.svg'

export default class Skills extends Component {
      render() {
            return (
                  <>
                        <div className="wrapper">
                              <div className="social-container-wrap">
                                    <br /><br /><br />
                                    <div className="social-container">
                                          <a href="" className="twitter"><i className="fa fa-twitter"></i><img src={veggie} width="25" alt="vegan"></img></a>
                                          <a href="" className="facebook"><i className="fa fa-facebook"><img src={skate} width="25" alt="skate"></img></i></a>
                                          <a href="" className="youtube"><i className="fa fa-youtube"><img src={snow} width="25" alt="snow"></img></i></a>
                                          <a href="" className="pinterest"><i className="fa fa-pinterest"><img src={surf} width="25" alt="surf"></img></i></a>
                                          <a href="" className="codepen"><i className="fa fa-codepen"><img src={tatoo} width="25" alt="tatoo"></img></i></a>
                                          <a href="" className="dribbble"><i className="fa fa-dribbble"><img src={clothes} width="25" alt="clothes"></img></i></a>
                                          <a href="" className="instagram"><i className="fa fa-instagram"><img src={computer} width="25" alt="computer"></img></i></a>
                                          <a href="" className="linkedin"><i className="fa fa-linkedin"><img src={data} width="25" alt="database"></img></i></a>
                                          <a href="" className="whatsapp"><i className="fa fa-whatsapp"><img src={work} width="25" alt="work"></img></i></a>
                                    </div>
                              </div>
                        </div>
                  </>
            )
      }
}





