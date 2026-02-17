import React, { useEffect, useRef } from "react";
import "./index.css";

/* ---------- Fade In Hook ---------- */
function useFadeInOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ---------- Navbar ---------- */
function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        Sumit<span>.</span>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className="theme-toggle"
        onClick={() => document.body.classList.toggle("dark")}
      >
        🌙
      </button>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useFadeInOnScroll();

  return (
    <section id="home" className="hero fade-in" ref={ref}>
      <div className="hero-content">
        <p className="hero-tag">Aspiring Data Scientist</p>

        <h1>
          Hi, I'm <span>Sumit Kumar Karn</span>
        </h1>

        <p className="hero-subtext">
  Aspiring Data Scientist skilled in Machine Learning, NLP, Data Analysis, Python, SQL, and AWS.
  Focused on building end-to-end, real-world ML solutions.
</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a
            href="/SResume.pdf"
            download
            className="btn secondary-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Sumit006-coder-dotcom" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sumit-karn-86606524a" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-card">
  <p className="hero-pill">BCA (Hons. with Research) @ Galgotias University</p>
  <p className="hero-pill">AI-ML Virtual Internship (AICTE • AWS)</p>
</div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const ref = useFadeInOnScroll();

  return (
    <section id="about" className="section fade-in" ref={ref}>
      <h2 className="section-title">About Me</h2>

      <div className="section-content about-grid">
  <div className="about-text">
    <p>
      Aspiring <strong>Data Scientist</strong> with practical experience in
      data preprocessing, exploratory data analysis (EDA), machine learning
      model development, and NLP-based text analysis.
    </p>

    <p>
      Experienced with <strong>Python, SQL, Pandas, Scikit-learn, NLP, Flask,
      React, and AWS</strong> through hands-on projects and internships.
    </p>

    <p>
      Seeking opportunities as a <strong>Data Scientist / ML Engineer</strong>
      to contribute to impactful, scalable AI-driven solutions.
    </p>
  </div>

  <div className="about-card">
    <div><span>Name:</span> Sumit Kumar Karn</div>
    <div><span>Degree:</span> BCA (Hons. with Research)</div>
    <div><span>University:</span> Galgotias University</div>
    <div><span>Location:</span> New Delhi, India</div>
    <div><span>Email:</span> sumitkarn2005@gmail.com</div>
    <div><span>Phone:</span> +91 8826739429</div>
  </div>
</div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  const ref = useFadeInOnScroll();

  return (
    <section id="skills" className="section fade-in" ref={ref}>
      <h2 className="section-title">Skills</h2>

      <div className="section-content skills-grid">
        <div className="skill-card">
          <h3>💻 Programming</h3>
          <p>Python, Java, SQL, JavaScript, C</p>
        </div>

        <div className="skill-card">
          <h3>📊 Machine Learning & Data Science</h3>
          <p>
            Regression, Classification, Clustering, Feature Engineering,
            Model Evaluation, EDA
          </p>
        </div>

        <div className="skill-card">
          <h3>🧠 Natural Language Processing (NLP)</h3>
          <p>
            Text Preprocessing, TF-IDF, Sentiment Analysis,
            Tokenization, Vectorization
          </p>
        </div>

        <div className="skill-card">
          <h3>📈 Data Analysis & Visualization</h3>
          <p>Pandas, NumPy, Matplotlib, Seaborn, Statistics</p>
        </div>

        <div className="skill-card">
          <h3>🌐 Web & Backend</h3>
          <p>HTML, CSS, JavaScript, Flask, React (Basic), PHP</p>
        </div>

        <div className="skill-card">
          <h3>🛠️ Tools & Platforms</h3>
          <p>Git, GitHub, Jupyter, VS Code, AWS (SageMaker Basics)</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const ref = useFadeInOnScroll();

  return (
    <section id="projects" className="section fade-in" ref={ref}>
      <h2 className="section-title">Projects</h2>

      <div className="section-content projects-grid">

        {/* Project 1 */}
        <article className="project-card">
          <div className="project-header">
            <h3>Weather Prediction Using Machine Learning</h3>
            <span className="project-badge">ML Project</span>
          </div>

          <div className="tech-badges">
            <span>Python</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
            <span>EDA</span>
            <span>Regression</span>
          </div>

          <p className="project-desc">
            Built a data-driven weather prediction system using historical datasets,
            achieving <strong>~85% prediction accuracy</strong> through regression
            models and feature engineering.
          </p>

          <ul className="project-points">
            <li>Cleaned and preprocessed raw weather data</li>
            <li>Performed exploratory data analysis (EDA)</li>
            <li>Trained and evaluated regression models</li>
            <li>Improved accuracy using feature selection</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/Sumit006-coder-dotcom/weather-prediction-ai"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card">
          <div className="project-header">
            <h3>Sentiment Analysis using NLP</h3>
            <span className="project-badge">NLP Project</span>
          </div>

          <div className="tech-badges">
            <span>Python</span>
            <span>NLP</span>
            <span>TF-IDF</span>
            <span>Logistic Regression</span>
            <span>Text Mining</span>
          </div>

          <p className="project-desc">
            Developed an end-to-end NLP sentiment analysis system for text reviews,
            achieving <strong>86%+ classification accuracy</strong> using TF-IDF
            and machine learning classifiers.
          </p>

          <ul className="project-points">
            <li>Text preprocessing & normalization</li>
            <li>Feature extraction using TF-IDF</li>
            <li>Model training & evaluation</li>
            <li>Hyperparameter tuning</li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/Sumit006-coder-dotcom/NLP--Kindle-Review-Sentiment-Analysis"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}
/* ---------- GitHub Highlight ---------- */
function GitHubHighlight() {
  const ref = useFadeInOnScroll();

  return (
    <section className="section fade-in" ref={ref}>
      <h2 className="section-title">Open Source & GitHub</h2>

      <div className="section-content github-card">
        <h3>GitHub Projects & Contributions</h3>

        <p>
          Actively developing <strong>Machine Learning, NLP, and Data Analytics</strong>
          projects with clean code, documentation, and real-world datasets.
        </p>

        <ul>
          <li>End-to-end ML & NLP projects</li>
          <li>Python, Pandas, Scikit-learn, Flask</li>
          <li>Focus on data pipelines & model evaluation</li>
        </ul>

        <a
          href="https://github.com/Sumit006-coder-dotcom"
          target="_blank"
          rel="noreferrer"
          className="btn primary-btn"
        >
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
}

/* ---------- Certificates ---------- */
function Certificates() {
  const ref = useFadeInOnScroll();

  return (
    <section id="certificates" className="section fade-in" ref={ref}>
      <h2 className="section-title">Certificates</h2>

      <div className="section-content certificates-grid">
        <div className="certificate-card"><h3>AWS Academy</h3><p>Machine Learning Foundations</p></div>
        <div className="certificate-card"><h3>IBM</h3><p>Machine Learning with Python</p></div>
        <div className="certificate-card"><h3>IBM</h3><p>Applied Data Science – Level 2</p></div>
        <div className="certificate-card"><h3>IBM</h3><p>AI Fundamentals</p></div>
        <div className="certificate-card"><h3>LinkedIn Learning</h3><p>Data Analytics</p></div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const ref = useFadeInOnScroll();

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for reaching out! You can email me at sumitkarn2005@gmail.com");
  }

  return (
    <section id="contact" className="section fade-in" ref={ref}>
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        {/* Left side: Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out for internships, projects, or collaboration
            opportunities in <strong>Data Science & ML</strong>.
          </p>

          <ul>
            <li><span>Email:</span> sumitkarn2005@gmail.com</li>
            <li><span>Phone:</span> +91 8826739429</li>
            <li><span>Location:</span> New Delhi, India</li>
          </ul>
        </div>

        {/* Right side: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required />
          <button type="submit" className="btn primary-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sumit Kumar Karn • Data Science & ML Portfolio</p>
    </footer>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubHighlight />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}