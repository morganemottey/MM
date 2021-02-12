import Image from 'next/image';

export default function Project({ name, title, github, application, image }) {
      return (
            <>
                  <div class="project">
                        <div class="card">
                              <h2>{name}.</h2>
                              <i class="fas fa-arrow-right"></i>
                              <p>{github} .</p>
                              <div className="link">
                                    <p>{application} .</p>
                                    <p>{title} .</p>
                              </div>
                              <div class="pic">
                                    <Image src={image} width={400} height={200} />
                              </div>
                              <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                              </ul>
                              <div class="social">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-github"></i>
                              </div>
                              <button>
                              </button>
                        </div>
                  </div>
            </>
      )
}
