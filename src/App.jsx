import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ContactForm from "./components/ContactForm.jsx";
import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function App() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {/* Home / hero */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div>
              <p className="status">
                <span className="dot" />
                Open to internships and junior roles
              </p>
              <h1>
                I build fast, responsive interfaces that feel{" "}
                <span className="grad">good on every screen</span>.
              </h1>
              <p className="lead">
                Hi, I'm James Ngare, a web developer learning and shipping with
                React, Vite, and modern CSS. Aiming to become a great fullstack
                developer as well as Guru for AI and ML.
              </p>
              <div className="cta">
                <a className="btn btn-primary" href="#projects">
                  Explore my work
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact me
                </a>
              </div>
            </div>
            <div className="devices" aria-hidden="true">
              <div className="browser">
                <div className="bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="pane">
                  <div className="sk w1" />
                  <div className="sk w2" />
                  <div className="sk w3" />
                  <div className="cards">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              </div>
              <div className="phone">
                <div
                  className="sk w1"
                  style={{ height: ".7rem", marginBottom: ".6rem" }}
                />
                <div className="cards">
                  <div />
                  <div />
                </div>
              </div>
              <div className="chip">
                Layout: <b>3 columns, 2, then 1</b>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="wrap">
            <SectionHeading
              title="About me"
              description="What I'm learning and how I work."
            />
            <div className="about">
              <div>
                <p>
                  I am a Software Engineering student passionate about building
                  practical, user-friendly, and responsive software solutions
                  that solve real-world problems. I enjoy exploring how
                  technology works, breaking complex problems into manageable
                  steps, and turning ideas into functional applications using
                  technologies such as Java, JavaScript, React, Node.js, and
                  Spring Boot. I test my work by running applications, debugging
                  errors, and improving functionality based on the results, with
                  the goal of creating reliable solutions that meet users'
                  needs. I am continuously expanding my skills in full-stack
                  development, database management, API design, and software
                  engineering best practices as I work toward becoming a
                  competent software engineer.
                </p>
              </div>
              <div className="facts">
                <div>
                  <span>Focus</span>
                  <strong>Frontend</strong>
                </div>
                <div>
                  <span>Based in</span>
                  <strong>Eldoret city</strong>
                </div>
                <div>
                  <span>Studying</span>
                  <strong>Software Engineering</strong>
                </div>
                <div>
                  <span>Contact</span>
                  <strong>Email me</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="wrap">
            <SectionHeading
              title="Skills"
              description="Grouped by area. Dashed tags are things I'm still learning."
            />
            <div className="skills">
              {skills.map((g) => (
                <div className="skill" key={g.title}>
                  <h3>{g.title}</h3>
                  <div className="tags">
                    {g.items.map((i) => (
                      <span
                        key={i.name}
                        className={"tag" + (i.learning ? " learn" : "")}
                      >
                        {i.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="wrap">
            <SectionHeading
              title="Selected projects"
              description="Each one lists the problem, my part, and what I learned."
            />
            <div className="filters" role="group" aria-label="Filter projects">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="project-grid">
              {shown.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <div className="wrap">
            <SectionHeading title="Education and experience" />
            <ol className="timeline">
              <li>
                <time>Year to Year</time>
                <h3>Your degree or course</h3>
                <p>Software Engineering </p>
              </li>
              <li>
                <time>Year</time>
                <h3>Certification or internship</h3>
                <p>CareerLens Project</p>
              </li>
              <li>
                <time>Year</time>
                <h3>Secondary school or earlier training</h3>
                <p>Started at my year 1</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="wrap contact">
            <div>
              <SectionHeading
                title="Let's talk"
                description="Tell me about the role or project. I reply within a couple of days."
              />
              <ul>
                <li>
                  <a href="mailto:ngarejames2550@gmail.com">ngarejames.com</a>
                </li>
                <li>
                  <a href="github.com/jnn-2550/my_Portifolio/settings/pages">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>&copy; {new Date().getFullYear()} Ngare James</span>
          <span>Built with React, Vite, and CSS</span>
        </div>
      </footer>
    </>
  );
}
