
import React, { Component } from 'react'


export default class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: false,
      block2: false,
      bloack3: false
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="wow fadeInUp" data-wow-delay="1.2s">experiences.</h3><br />

                <p className="wow fadeInUp">From a scientific background, I chose to realize my biggest dream and above all , achieve one of my biggest goals: to get up every morning and work without going backwards.</p>

                <p className="wow fadeInUp" data-wow-delay="0.2s">After having completed a full stack training based on React and Node. Then had the opportunity to be hired in a Lyon start-up whose goal was to create recommerce platforms to resell second-hand products (like Vinted), all based on Symfony and VueJS.
                I am a versatile girl, curious, and in love with my work. I'm not afraid of challenges and I always stay motivated.</p>
                <a className="validate_skills" href="https://drive.google.com/file/d/1xGfIu-etFhwVdtOqsTFKV_XtJ0wmG50t/view?usp=sharing" target="_blank">Letter of recommendation</a>
              </div>
            </div>
          </div>
        </div>
      <div className="container_experience mt-0">
      <div className="rightbox">
        <div className="rb-container">
          <ul className="rb">
            <li className="rb-item" ng-repeat="itembx">
              <div className="timestamp">
                Feb 2020 - Nov 2020
              </div>
              <div className="item-title">FrontEnd Developer</div>
              <p className="item-p"  onClick={function(){this.setState({block1:!this.state.block1})}.bind(this)} > en savoir + </p>
              <div className={this.state.block1? "panel-collapse": "panel-collapse panel-close"}>
              <div className="list-group">
                <p className="town">Lyon (02) - Place2Swap</p>
                <p className="moreExp">| Return (Veepee) , platform that offers a second chance <br/>to buy missed items on Veepee with VueJS - Symfony</p>
                <p className="moreExp">| Cdiscount Occasion , second-hand objects sales platform between individuals with Vuejs - Symfony</p>
              </div>
          </div>
            </li>
            <li className="rb-item" ng-repeat="itembx">
              <div className="timestamp">
                Sept 2019 - Feb 2020
              </div>
              <div className="item-title">FullStack Developer</div>
              <p className="item-p"  onClick={function(){this.setState({block2:!this.state.block2})}.bind(this)} > en savoir + </p>
              <div className={this.state.block2? "panel-collapse": "panel-collapse panel-close"}>
              <div className="list-group">
                <p className="town">Lyon (02) - Wild Code School</p>
                <p className="moreExp">| Development of several projects with Reactjs - Nodejs</p>
                <p className="moreExp">| Mockup - Database modeling - Model integration - Feature development</p>
                <p className="moreExp">| Participation in 2 hackatons</p>
              </div>
            </div>
            </li>
          </ul>

        </div>
      </div>
      </div>
      </div>
    )
  }
}
