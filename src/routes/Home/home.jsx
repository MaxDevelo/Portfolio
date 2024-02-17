import "./home.scss";
import data from "../../data/content.json";
import Skills from "../../components/Skills/skills";

export default function Home() {
  document.title = "Maxime WAWRZYNIAK - Portfolio";
  return (
    <div className="container">
      <div className="details">
        <div className="logo">
          <img src="/public/assets/images/photo.jpeg" alt="Maxime WAWRZYNIAK" />
        </div>
        <div className="description">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="skills" id="skills">
        <h2>Skills</h2>
        <Skills />
      </div>
      {/* <div className="projects" id="projects">
        <h2>Projects</h2>
      </div> */}
    </div>
  );
}
