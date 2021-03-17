import "./Technology.css";
import javaLogo from "./images/java-logo.png";
import cLogo from "./images/c-logo.png";
import reactLogo from "./images/react-logo.png";
import reduxLogo from "./images/redux-logo.svg";
import bootstrapLogo from "./images/bootstrap-logo.png";
import jQueryLogo from "./images/jQuery-logo.png";
import d3Logo from "./images/d3-logo.png";

const Technology = (props) => {
  return(
    <div id="tech-section">
      <h2 id="tech-intro" className="section-title">I have experience with the following technologies:</h2>
      <div id="tech-imgs" className="text-center">
        <div className="row">
          <div className="col-sm-2">

          </div>
          <div className="col-sm-4">
            <img id="java-logo" src={javaLogo} alt="java-logo" className="img-responsive" />
            <p className="img-label">Java</p>
          </div>
          <div className="col-sm-4">
            <img id="c-logo" src={cLogo} alt="c-logo" className="img-responsive" />
            <p id="c-label" className="img-responsive">C++</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img id="react-logo" src={reactLogo} alt="react-logo" className="img-responsive"/>
            <p className="img-label">React</p>
          </div>
          <div className="col-sm-4">
            <img id="redux-logo" src={reduxLogo} alt="redux-logo" className="img-responsive"/>
            <p className="img-label">Redux</p>
          </div>
          <div className="col-sm-4">
            <img id="bootstrap-logo" src={bootstrapLogo} alt="bootstrap-logo" className="img-responsive" />
            <p className="img-label">Bootstrap</p>
          </div>
        </div>
        <div id="final-row" className="row justify-content-around">
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <img id="jQuery-logo" src={jQueryLogo} alt="jQuery-logo" className="img-responsive" />
            <p className="img-label">jQuery</p>
          </div>
          <div id="d3" className="col-sm-4">
            <img id="d3-logo" src={d3Logo} alt="d3-logo" className="img-responsive" />
            <p className="img-label">D3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
