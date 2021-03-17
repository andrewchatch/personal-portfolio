import "./Projects.css";
import markdownPreviewer from "./images/MarkdownPreviewer.png";

const MarkdownPreviewer = (props) => {
  return(
    <div id="markdown-project" className="project">
      <a id="markdown-link" className="project-links" href="https://codepen.io/andrewchatch/full/YzpjQqb" target="_blank" rel="noreferrer">
        <img src={markdownPreviewer} alt="Markdown Previewer" className="img-responsive project-img" />
        <div className="project-img-label text-center">Markdown Previewer</div>
      </a>
    </div>
  );
};

export default MarkdownPreviewer;
