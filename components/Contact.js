export default function Contact() {
      return (
            <>
            <div class="container">
                  <div class="hero-content">
                        <br/>

                        <div class="row">
                              <div class="col-lg-8">

                                    <h3 class="wow fadeInUp" data-wow-delay="1s">contact me </h3>
                                    <p class="wow fadeInUp" data-wow-delay="1.2s">Do not hesitate to contact me to find out more about my career as a developer and my personality. Don't be afraid..</p>

                              </div>
                        </div>
                  </div>
            </div>
           

            <div class="whitespace"></div>

           
            <div class="container-fluid">
                  <div class="row">
                        <div class="col-lg-8">
                              <form name="contact-form" id="contact-form" method="post" action="">

                              <ul>

                              <li class="wow fadeInUp" data-wow-delay="1.4s">
                                    <label for="contact-name">Name :</label>
                                    <div class="textarea">
                                          <input type="text" name="contact-name" id="contact-name" value="" required/>
                                    </div>
                              </li>

                              <li class="wow fadeInUp" data-wow-delay="1.6s">
                                    <label for="contact-email">Email :</label>
                                    <div class="textarea">
                                          <input type="email" name="contact-email" id="contact-email" value="" required/>
                                    </div>
                              </li>

                              <li class="wow fadeInUp" data-wow-delay="1.6s">
                                    <label for="contact-project">Message :</label>
                                    <div class="textarea">
                                          <textarea type="email" name="contact-project" id="contact-project" rows="6" value="" required>
                                          </textarea>
                                    </div>
                              </li>

                              </ul>

                              <button type="submit" name="contact-submit" id="contact-submit" class="send wow fadeInUp">Send Message</button>

                              </form>
                        </div>
                  </div>
            </div>
            </>
      )
}



