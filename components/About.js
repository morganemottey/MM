
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
  ap: 60,
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
        <div className="container">
          <div className="hero-content">
            <br /><br />

            <div className="row">
              <div className="col-lg-12">
                <h3 className="wow fadeInUp" data-wow-delay="1.2s">about me.</h3><br />

                <p className="wow fadeInUp">From a scientific background, I chose to realize my biggest dream and above all , achieve one of my biggest goals: to get up every morning and work without going backwards.</p>

                <p className="wow fadeInUp" data-wow-delay="0.2s">My passion for computers in general started from my childhood thanks to my father. When Windows 98 arrive, I began to explore this world while watching my dad. Passionate about clothing but especially board sports(skate, surf, snow), I decided to take the lead by trying to create a website selling boardsports products (locally).
                A few years passed, the passion for computers never left, but studies took center stage.
                When back to high school I had a sudden urge to change my OS, so I bought my first second-hand Mac where I was able to start learning about this new operating system.
                After serious health problems, I managed to get my science baccalaureate without being able to go to class. So I started a scientific journey in medical school.
                After so many years of accumulating jobs and looking for my way in Saint Etienne, I decided to go to Lyon.
              So I worked to be able to finance my training, which was the best gift I could give myself !! So I realized that I didn't want to do anything else with my life.</p>
                <br />
                <p className="wow fadeInUp" data-wow-delay="0.2s"> After completing my training, I was lucky enough to be hired in a start-up in Lyon. This is how my career as a developer began, it has been very rewarding<br />
              Aside from the skills I acquired during my professional experiences, I train a lot at home, I make sure to be on the lookout for new technologies.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="hero-content">
            <br /><br />

            <div className="row">
              <div className="col-lg-12">
                <h3 className="wow fadeInUp" data-wow-delay="1.2s">skills.</h3><br />
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
                    <div className="skill">VueJS</div>
                    <div className="bar-outer">
                      <div className="speech-bubble vue">80%</div>
                      <div className="bar-inner vj"></div>
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
                    <div className="skill">Api Platform</div>
                    <div className="bar-outer">
                      <div className="speech-bubble api">60%</div>
                      <div className="bar-inner ap"></div>
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
