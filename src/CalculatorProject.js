import "./Projects.css";
import calculator from "./images/Calculator.png";

const CalculatorProject = (props) => {
  return(
    <div id="calc-project" className="project">
      <a id="calc-link" className="project-links" href="https://andrewchatch.github.io/JavaScript-Calculator/" target="_blank" rel="noreferrer">
        <img src={calculator} alt="Calculator" className="img-responsive project-img" />
        <div className="project-img-label text-center">JavaScript Calculator</div>
      </a>
    </div>
  );
};

export default CalculatorProject;
