
export default function Contact() {
      return (
            <div className="wrapper">
                  <div className="container">
                        <div className="hero-content">
                              <br />

                              <div className="row">
                                    <div className="col-lg-8">

                                          <h3 className="wow fadeInUp" data-wow-delay="1s">say hello </h3><br />
                                          <p className="wow fadeInUp" data-wow-delay="1.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, accusantium sint quod voluptatem dolorum, quaerat, ut iusto cumque magni ab repudiandae, quasi minus unde temporibus nulla eum eaque! Placeat praesentium sunt suscipit laboriosam deserunt commodi atque corporis, iure maiores dicta, fugit similique.</p>

                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className="container-fluid">
                        <div className="row ml-0">
                              <div className="col-lg-8">
                                    <form name="contact-form" id="contact-form" method="post" action="">

                                          <ul>

                                                <li className="wow fadeInUp" data-wow-delay="1.4s">
                                                      <label for="contact-name">Name :</label>
                                                      <input className="input" type="text" required/>
                                                </li>

                                                <li className="wow fadeInUp" data-wow-delay="1.6s">
                                                      <label for="contact-email">Email :</label>
                                                      <input className="input" type="email"required />
                                                </li>

                                                <li className="wow fadeInUp" data-wow-delay="1.6s">
                                                      <label for="contact-project">Message :</label>
                                                      <textarea className="input" type="text" required></textarea>
                                                </li>

                                          </ul>

                                          <button type="submit" name="contact-submit" id="contact-submit" className="send wow fadeInUp">Send Message</button>

                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      )
}



