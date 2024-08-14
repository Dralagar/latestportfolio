import React from "react";
import { Container } from "react-bootstrap";
import "./Styles/CV.css";

function CV() {
  const skills = {
    "Web Technologies": ["CSS", "Email Development", "JavaScript (ES6+)"],
    "Front-end Frameworks/Libraries": ["React.js", "Bootstrap", "Tailwind CSS", "Next.js"],
    "Back-end Technologies": ["Node.js", "PHP"],
    "Database Management": ["MongoDB", "Firebase", "MySQL"]
  };

  const experience = [
    {
      title: "Director of Programs",
      organization: "Youth Voices Community",
      description: [
        "Leads program oversight and implementation processes.",
        "Reviews and approves budgets to ensure financial alignment with organizational goals.",
        "Strategically plans, guides, and executes the development trajectory of the organization.",
        "Represents the organization in stakeholder engagements and meetings, fostering strong relationships.",
        "Compiles comprehensive program reports for partner reference, ensuring transparency and accountability.",
        "Coordinates and supervises program activities to ensure efficient and effective delivery."
      ],
      dates: "9th Jan - 2024"
    }
  ];

  const education = [
    {
      title: "Bachelor of Arts in Social Sciences",
      description: "Major Political Science, Minor Sociology",
      institution: "The Catholic University of Eastern Africa",
      date: "29th of October 2021"
    },
    {
      title: "Web Development Bootcamp",
      institution: "GLAD Technology",
      description: [
        "10 weeks in-person hands-on learning, solo projects, pair programming",
        "10 weeks Zoom team follow-up learning and projects"
      ],
      date: "[13 June 2023] - [18 Nov 2023]"
    }
  ];

  return (
    <div className="cvbody">
      <div className="Container">
        <div className="paper-background">
          <header id="info">
            <div className="left">
              <h1>George Dralagar</h1>
              <h2>Web Developer</h2>
            </div>
            <div className="right">
              <strong>Email:</strong>{" "}
              <a href="mailto:gdralagar@gmail.com">gdralagar@gmail.com</a>
              <br />
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Dralagar/George-">
                github.com/Dralagar/George-
              </a>
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/george-dralagar-107931113">
                linkedin.com/in/george-dralagar
              </a>
            </div>
          </header>
          <main>
            <hr />
            <section id="profile">
              <div className="left">
                <h3>Profile</h3>
              </div>
              <div className="right">
                <p>
                  In Nairobi, Kenya, I'm passionately navigating the realms of Political Science, advocating for youth causes, and exploring contextual nuances with enthusiasm. My journey is all about championing digital livelihoods, nurturing sustainability, and diving deep into the fabric of society. With a Bachelor's degree in Social Science, majoring in Political Science and minoring in Sociology, I bring a blend of skills in communication, advocacy, and research. From stirring public speeches to crafting engaging blogs and podcasts, I thrive in creating digital content that resonates. I'm fueled by a genuine dedication to excellence and ready to bring my unique perspective to diverse projects and initiatives.
                </p>
              </div>
            </section>
            <hr />
            <section id="skill">
              <div className="left">
                <h3>Skills</h3>
              </div>
              <div className="right">
                <ul>
                  {Object.entries(skills).map(([category, items]) => (
                    <li key={category}>
                      <h3>{category}</h3>
                      <ul>
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <hr />
            <section id="experience">
              <div className="left">
                <h3>Experience</h3>
              </div>
              <div className="right">
                {experience.map((exp, index) => (
                  <div className="work-item" key={index}>
                    <div className="work-title-left">
                      <h4>{exp.title}</h4>
                      <p>{exp.organization}</p>
                    </div>
                    <div className="work-title-right">
                      <h4>Job Description</h4>
                      <ul>
                        {exp.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="work-title-left">
                      <h5>Dates</h5>
                      <div className="work-title-right">
                        <p>{exp.dates}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <hr />
            <section id="education">
              <div className="left">
                <h3>Education</h3>
              </div>
              <div className="right">
                {education.map((edu, index) => (
                  <div className="education-item" key={index}>
                    <div className="education-title-left">
                      <h4>{edu.title}</h4>
                      <p>{edu.description}</p>
                      <p>{edu.institution}</p>
                    </div>
                    <div className="education-title-right">
                      <h5>{edu.date}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CV;
