import React from 'react'

export default function Details() {
        return (
            <>
            <div className="container">
            <div className="hero-content">
                  <br/>
                  <div className="row">
                        <div className="col-lg-12">
                              <br/>

                              <h1 className="wow fadeInUp" data-wow-delay="1s"></h1>

                              <div className="row">
                                    <div className="col-lg-4">
                                          <p className="wow fadeInUp" data-wow-delay="1.2s">technology :</p>
                                          <h6 className="wow fadeInUp" data-wow-delay="1.3s">HTML | CSS | BOOTSTRAP</h6>
                                    </div>

                                    <div className="col-lg-4">
                                          <p className="wow fadeInUp" data-wow-delay="1.4s">started :</p>
                                          <h6 className="wow fadeInUp" data-wow-delay="1.5s">Sept 2019</h6>
                                    </div>

                                    <div className="col-lg-4">
                                          <p className="wow fadeInUp" data-wow-delay="1.6s">completed :</p>
                                          <h6 className="wow fadeInUp" data-wow-delay="1.7s">Sept 2019</h6>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-lg-4">
                                          <p className="wow fadeInUp" data-wow-delay="1.2s">url :</p>
                                          <h6 className="wow fadeInUp" data-wow-delay="1.3s">http://</h6>
                                    </div>

                                    <div className="col-lg-4">
                                          <p className="wow fadeInUp" data-wow-delay="1.4s">depot github :</p>
                                          <h6 className="wow fadeInUp" data-wow-delay="1.5s">Git</h6>
                                    </div>
                              </div>
                              <br/>
                              <p className="wow fadeInUp" data-wow-delay="1.8s">Réalisation sur le thème du "green" avec un site vitrine statique alliant le mot 'uni-vert' et la cause écologique.</p>
                        </div>
                  </div>
            </div>
      </div>

      <div className="carousel js-carousel">
            <figure className="carousel__frame js-carousel__frame">
                  <div className="carousel__slides js-carousel__slides">
                        <img src="univert_1.png" className="carousel__item" />
                        <img src="univert_2.png" className="carousel__item" />
                        <img src="univert_3.png" className="carousel__item" />
                        <img src="univert_4.png" className="carousel__item" />

                  </div>

                  <button className="carousel__prev js-carousel__prev">
                        <i className="fas fa-chevron-left"></i>
                        </button>
                  <button className="carousel__next js-carousel__next">
                        <i className="fas fa-chevron-right"></i>
                  </button>

            </figure>
      </div>
      </>
        )
    }
