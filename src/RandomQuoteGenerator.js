import "./Projects.css";
import randomQuoteGenerator from "./images/RandomQuoteGenerator.png";

const RandomQuoteGenerator = (props) => {
  return(
    <div id="quote-project" className="project">
      <a id="quote-link" className="project-links" href="https://codepen.io/andrewchatch/full/QWGmEqJ" target="_blank" rel="noreferrer">
        <img src={randomQuoteGenerator} alt="Random Quote Generator" className="img-responsive project-img" />
        <div className="project-img-label text-center">Random Quote Generator</div>
      </a>
    </div>
  );
};

export default RandomQuoteGenerator;
