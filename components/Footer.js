import React from 'react'


const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <br />
                    <div className="collab">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="wow fadeInUp">Got an interesting project? I can help you.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="hr">
                        <div className="row"></div>
                    </div>
                    <br />
                    <div className="info">
                        <div className="row">
                            <div className="col-lg-4" id="personal">
                                <p className="wow fadeInUp">Copyright ® 2020 </p>
                                <h4 className="wow fadeInUp" data-wow-delay="0.2s">morgane | mottey</h4>
                                <br />
                            </div>
                            <div className="col-lg-4" id="media">
                                <p className="wow fadeInUp" data-wow-delay="0s">follow me</p>
                                <ul>
                                    <a id="fb" href="https://www.facebook.com/morgane.mottey" target="_blank" className="wow fadeInUp" data-wow-delay="0.4s">fb</a>
                                    <a id="yt" href="https://github.com/morganemottey" target="_blank" className="wow fadeInUp" data-wow-delay="1s">gb</a>
                                    <a id="lk" href="https://www.linkedin.com/in/morgane-mottey-9a3126b5/" target="_blank" className="wow fadeInUp" data-wow-delay="1s">lin</a>
                                </ul>
                                <br />
                            </div>
                            <div className="col-lg-4" id="address">
                                <p className="wow fadeInUp" data-wow-delay="0s">contact me</p>
                                <h4 className="wow fadeInUp" data-wow-delay="0.2s"><a className="mailto" href="mailto:morgane.mottey@gmail.com">morgane.mottey@gmail.com</a></h4>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
