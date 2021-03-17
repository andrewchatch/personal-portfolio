import "./Projects.css";
import surveyForm from "./images/SurveyForm.png";

const SurveyForm = (props) => {
  return(
    <div id="survey-project" className="project">
      <a id="survey-link" className="project-links" href="https://codepen.io/andrewchatch/full/poNyGMo" target="_blank" rel="noreferrer">
        <img src={surveyForm} alt="Survey Form" className="img-responsive project-img" />
        <div className="project-img-label text-center">Survey Form</div>
      </a>
    </div>
  );
};

export default SurveyForm;
