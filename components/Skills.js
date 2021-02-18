
import React, { Component } from 'react'
import $ from 'jquery';

const skills = {
  ht: 90,
  sc: 90,
  js: 80,
  rt: 80,
  nd: 65,
  ex: 65,
  vj: 80,
  ph: 70,
  sy: 70,
  nex: 80,
  bt: 90,
  gt: 90,
  adm: 90,
  ja: 90
};

export default class About extends Component {
  componentDidMount() {
    this.mySkills();
  }
  mySkills() {
    $.each(skills, function (key, value) {
      let skillbar = $("." + key);
      skillbar.animate(
        {
          width: value + "%"
        },
        3000,
        function () {
          $(".speech-bubble").fadeIn();
        }
      );
    });
  }
  render() {
    return (
      <div>
        <div className="">
          <div className="hero-content">
            <br /><br />
            <div className="row">
              <div className="col-lg-12">
                <div className="container">
                  <div className="bar">
                    <div className="skill">HTML & CSS</div>
                    <div className="bar-outer">
                      <div className="speech-bubble html">90%</div>
                      <div className="bar-inner ht"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">SCSS</div>
                    <div className="bar-outer">
                      <div className="speech-bubble scss">90%</div>
                      <div className="bar-inner sc"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">Javascript</div>
                    <div className="bar-outer">
                      <div className="speech-bubble javascript">80%</div>
                      <div className="bar-inner js"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">React</div>
                    <div className="bar-outer">
                      <div className="speech-bubble react">80%</div>
                      <div className="bar-inner rt"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">Next JS</div>
                    <div className="bar-outer">
                      <div className="speech-bubble next">80%</div>
                      <div className="bar-inner nex"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">VueJS</div>
                    <div className="bar-outer">
                      <div className="speech-bubble vue">80%</div>
                      <div className="bar-inner vj"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">NodeJS</div>
                    <div className="bar-outer">
                      <div className="speech-bubble node">65%</div>
                      <div className="bar-inner nd"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">ExpressJS</div>
                    <div className="bar-outer">
                      <div className="speech-bubble express">65%</div>
                      <div className="bar-inner ex"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">Php</div>
                    <div className="bar-outer">
                      <div className="speech-bubble php">70%</div>
                      <div className="bar-inner ph"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">Symfony</div>
                    <div className="bar-outer">
                      <div className="speech-bubble symfony">70%</div>
                      <div className="bar-inner sy"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">Bootstrap - Material UI - ReactStrap</div>
                    <div className="bar-outer">
                      <div className="speech-bubble bootstrap">90%</div>
                      <div className="bar-inner bt"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">Git</div>
                    <div className="bar-outer">
                      <div className="speech-bubble git">90%</div>
                      <div className="bar-inner gt"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">PhpMyAdmin - MySQLWorkBench - EasyAdmin</div>
                    <div className="bar-outer">
                      <div className="speech-bubble admin">90%</div>
                      <div className="bar-inner adm"></div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="skill">Jira - Trello</div>
                    <div className="bar-outer">
                      <div className="speech-bubble jira">90%</div>
                      <div className="bar-inner ja"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="whitespace"></div>
      </div>
    )
  }
}
