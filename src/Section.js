import React from "react";
import "./Section.css";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  render() {
    return(
      <section id={this.props.id} className="sections text-center">
        <h1 id={this.state.title} className="section-title">{this.state.title}</h1>
        {this.props.children}
      </section>
    );
  }
};

export default Section;
