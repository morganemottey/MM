
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
                        <div class="wrapper">
                              <div class="social-container-wrap">
                                    <br /><br /><br />
                                    <div class="social-container">
                                          <a href="" class="twitter"><i class="fa fa-twitter"></i><img src={veggie} width="25" alt="vegan"></img></a>
                                          <a href="" class="facebook"><i class="fa fa-facebook"><img src={skate} width="25" alt="skate"></img></i></a>
                                          <a href="" class="youtube"><i class="fa fa-youtube"><img src={snow} width="25" alt="snow"></img></i></a>
                                          <a href="" class="pinterest"><i class="fa fa-pinterest"><img src={surf} width="25" alt="surf"></img></i></a>
                                          <a href="" class="codepen"><i class="fa fa-codepen"><img src={tatoo} width="25" alt="tatoo"></img></i></a>
                                          <a href="" class="dribbble"><i class="fa fa-dribbble"><img src={clothes} width="25" alt="clothes"></img></i></a>
                                          <a href="" class="instagram"><i class="fa fa-instagram"><img src={computer} width="25" alt="computer"></img></i></a>
                                          <a href="" class="linkedin"><i class="fa fa-linkedin"><img src={data} width="25" alt="database"></img></i></a>
                                          <a href="" class="whatsapp"><i class="fa fa-whatsapp"><img src={work} width="25" alt="work"></img></i></a>
                                    </div>
                              </div>
                        </div>
                  </>
            )
      }
}





