import "./Education.css";

const Education = (props) => {
  return(
    <div id="edu-section">
      <h2 id="edu-title" className="section-title">Education:</h2>
      <h3 id="school-name"><b>Southern Utah University</b>,    2017-2020</h3>
      <p>
        BS in Applied Mathematics, <em>summa cum laude</em>
      </p>
      <ul>
        <li>Minors in Computer Science and Finance</li>
        <li>Coursework in Data Structures and Algorithms, Object-Oriented Programming, and Software Engineering Principles. </li>
      </ul>
    </div>
    );
};

export default Education;
