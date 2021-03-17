import React from "react";
import './App.css';
import Navigation from "./Navigation";
import Section from "./Section";
import PersonalSummary from "./PersonalSummary";
import Education from "./Education";
import Technology from "./Technology";
import ContactMe from "./ContactMe";
import CalculatorProject from "./CalculatorProject";
import DrumMachineProject from "./DrumMachineProject";
import MarkdownPreviewer from "./MarkdownPreviewer";
import RandomQuoteGenerator from "./RandomQuoteGenerator";
import SurveyForm from "./SurveyForm";

class App extends React.Component {

  render() {
    return(
      <div>
        <Navigation />
        <Section id="welcome" title="Hi, I'm Andrew.">
          <PersonalSummary />
          <Education title="Education"/>
          <Technology />
        </Section>
        <Section id="project-section" title="Projects">
          <CalculatorProject />
          <DrumMachineProject />
          <MarkdownPreviewer />
          <RandomQuoteGenerator />
          <SurveyForm />
        </Section>
        <Section id="contact-me" title="Contact Me">
          <ContactMe />
        </Section>
      </div>
    );
  }
};

export default App;
