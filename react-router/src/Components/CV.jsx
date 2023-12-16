import "./Styles/CV.css";
function CV() {
  return (
    <>
      <div className="BG">
        <div className="container mt-5">
          <div className="card cv-card paper-background">
            <header id="info">
              <div className="left">
                <h1>George Dralagar</h1>
                <h2>Web Developer</h2>
              </div>
              <div className="right">
                <strong>Email:</strong>
                <a href="mailto:gdralagar@gmail.com">gdralagar@gmail.com</a>
                <br />
                <strong>GitHub:</strong>
                <a href="https://github.com/Dralagar/George-">
                  github.com/Dralagar/George-
                </a>
                <br />
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/george-dralagar-107931113">
                  linkedin.com/in/george-dralagar
                </a>
              </div>
            </header>
            <main>
              <div>
                <hr />
                <section id="profile">
                  <div className="left">
                    <h3>Profile</h3>
                  </div>
                  <div className="right">
                    <p>
                      I like stiring a conversation, building meaningful
                      relations and and speaks about youth and policy. also a
                      web developer from Nairobi, Kenya. I hold a Bachelor
                      Degree in Arts and Social Science, Political Science and
                      sociology, I excel in communication, advocacy, research. I
                      do research, code and bloq and offering a diverse skill
                      set and a commitment to excellence.
                    </p>
                  </div>
                </section>
                <hr />
                <section id="skills">
                  <div className="left">
                    <h3>Skills</h3>
                  </div>
                  <div className="right">
                    <ul>
                      <li>Front end Developer</li>
                      <li>
                        Front-End Development: Proficient in HTML5, CSS3, and
                        JavaScript, with a strong eye for design and user
                        experience.
                      </li>
                      <li>
                        Skilled in creating responsive web pages using modern
                        frameworks and libraries such as React and Angular.
                        Experienced in optimizing websites for performance and
                        accessibility.
                      </li>
                      <li>
                        Back-End Development: Experienced in building scalable
                        and secure web applications using server-side
                        technologies such as Node.js, MongoDb.
                      </li>
                      <li>
                        I optimize websites for performance and SEO, ensuring
                        responsiveness across devices. I use tools like
                        Lighthouse and Google Analytics for improvements.
                      </li>
                      <li>Communication and Policy and Research</li>
                      <li>Youth youth meaningful participation</li>
                      <li>Social media content development and strategist</li>
                      <li>Sport for development</li>
                    </ul>
                  </div>
                </section>
                <hr />
                <section className="experience">
                  <div className="left">
                    <h3>Experience</h3>
                  </div>
                  <div className="right">
                    <div className="work-item">
                      <div className="work-title-left">
                        <h4>
                          Communication Led and Digital Livelihood Officer
                        </h4>
                        <div className="right">
                          <ul>
                            <li>Youth Voices Community</li>
                          </ul>
                        </div>
                      </div>
                      <div className="work-title-right">
                        <h5>2023</h5>
                        <p>
                          Responsible for maintaining the effectiveness of
                          intertanal and external communication and developing
                          and implimentation of the orgnisation communication
                          and strategic plan while also enhancing the
                          organsiation brand.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <hr />
                <section id="education">
                  <div className="left">
                    <h3>Education</h3>
                  </div>
                  <div className="right">
                    <div className="education-item">
                      <div className="education-title-left">
                        <h4>Bachelor of Arts in Political Science</h4>
                        <div className="right">
                          <ul>
                            <li>The Catholic University of Eatern Africa</li>
                          </ul>
                        </div>
                      </div>
                      <div className="education-title-right">
                        <h5>2018-2021</h5>
                        <p>Web Development</p>
                        <div className="right">
                          <ul>
                            <li>
                              Glad Technology Six Month Web Development Bootcamp
                            </li>
                          </ul>
                        </div>
                        <h6>2023</h6>
                      </div>
                    </div>
                    {/* Add more education items as needed */}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default CV;
