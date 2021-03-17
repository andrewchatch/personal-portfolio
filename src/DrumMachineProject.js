import "./Projects.css";
import drumMachine from "./images/DrumMachine.png";

const DrumMachineProject = (props) => {
  return(
    <div id="drum-project" className="project">
      <a id="drum-link" className="project-links" href="https://codepen.io/andrewchatch/full/WNoKZwq" target="_blank" rel="noreferrer">
        <img src={drumMachine} alt="Drum Machine" className="img-responsive project-img" />
        <div className="project-img-label text-center">Drum Machine Project</div>
      </a>
    </div>
  );
};

export default DrumMachineProject;
