// MachineLearningDevelopmentDetails.js
import React from 'react';
import './DomainDetails.css'; // Add your CSS styling
import ml from '../images/machine_learning.jpg';
import gettingstarted from "../images/ml_gettingstarted.webp";
import roadmap from "../images/roadmap_ml.png";
import career from "../images/careers_ml.jpeg";
import languages from "../images/languages_ml.cms";
import salary from "../images/salary_ml.webp";

const MachineLearningDevelopmentDetails = () => {
  return (
    <div className="domain-details">
        <div className="content">
          <h2 style={{textAlign:"center",textDecoration:"underline",fontWeight:"bold"}}>Machine Learning Development</h2>
          <p>
            Machine Learning Development involves creating intelligent systems that can learn from data and make predictions or decisions. It includes designing, training, and deploying machine learning models to solve complex problems.
          </p>
        </div>
        <img src={ml} style={{height:'500px',marginLeft:"150px",width:"75%"}} alt="Machine Learning Development" />
      <hr />

      <div className="section">
        <div className="content">
          <h3>Getting Started:</h3>
          <p>
            To start with Machine Learning development, acquire a strong understanding of programming languages like Python and the fundamentals of statistics and linear algebra. Familiarize yourself with popular machine learning libraries like TensorFlow or PyTorch.
            Getting started with Machine Learning involves understanding programming languages, statistics, and linear algebra. Platforms like Coursera and edX offer excellent courses on Machine Learning basics.
          </p>
        </div>
        <img src={gettingstarted} alt="Getting Started" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Languages Used:</h3>
          <p>
            Machine Learning developers primarily use Python for its simplicity and a rich ecosystem of libraries. Libraries like TensorFlow and PyTorch provide powerful tools for building and training machine learning models.
          </p>
          <br/>
          <p>
            Python is the dominant language in Machine Learning, known for its readability and extensive libraries. TensorFlow and PyTorch are widely used for creating and training machine learning models.
          </p>
        </div>
        <img src={languages} alt="Languages Used" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Roadmap:</h3>
          <p>
            Follow a roadmap that includes learning key concepts such as supervised and unsupervised learning, deep learning, and natural language processing. Gain practical experience by working on real-world machine learning projects.
          </p>
          <p>
            Machine Learning development roadmap:
            <ul>
              <li>Master Python programming</li>
              <li>Understand key machine learning concepts</li>
              <li>Explore supervised and unsupervised learning</li>
              <li>Deepen knowledge in deep learning and neural networks</li>
              <li>Work on natural language processing projects</li>
              <li>Apply machine learning in real-world scenarios</li>
            </ul>
          </p>
        </div>
        <img src={roadmap} alt="Roadmap" className="section-image-small" />
      </div>
      <hr />
      <div className="section-videos">
        <h4 style={{ marginBottom: '30px',textAlign:"center" }}>Roadmap to Start With Machine Learning Development</h4>

        {/* Video 1 */}
        <div className="video-item" style={{ marginBottom: '20px',marginLeft:'300px'}}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1vsmaEfbnoE"
            title="Roadmap to Machine Learning Development"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h3>Jobs and Career:</h3>
          <p>
            Machine Learning development offers diverse career opportunities, with roles such as Machine Learning Engineer, Data Scientist, or AI Specialist. Many companies, including tech giants, actively seek professionals for developing intelligent systems.
            Machine Learning development provides a wide range of career opportunities, including roles like Machine Learning Engineer, Data Scientist, or AI Specialist. Professionals in this field work on creating intelligent systems that can learn and make predictions. Tech companies actively seek experts in Machine Learning, and roles span from entry-level to senior positions. The field offers challenging projects, continuous learning, and competitive salaries.
          </p>
        </div>
        <img src={career} alt="Jobs and Career" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Average CTC:</h3>
          <p>
            The average CTC (Cost to Company) for Machine Learning developers varies based on experience, location, and skills. Entry-level professionals may earn salaries ranging from $70,000 to $90,000, while mid-level developers can expect salaries between $90,000 and $120,000. Senior Machine Learning developers with extensive experience may command salaries exceeding $120,000.
            For entry-level Machine Learning developers, the average salary typically ranges from $70,000 to $90,000 per year. As professionals gain experience, their salaries can increase, with mid-level Machine Learning developers earning between $90,000 and $120,000 annually. Senior or highly experienced Machine Learning developers, especially those with leadership roles or specialized skills, may command salaries exceeding $120,000.
          </p>
        </div>
        <img src={salary} alt="Average CTC" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>YouTube Resources:</h3>
          <p>
            Explore the following YouTube videos for best playlists to start learning Machine Learning development:
          </p>
          <ul>
            <li><a href="https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw" target="_blank" rel="noopener noreferrer">Machine Learning for Beginners</a></li>
            <li><a href="https://youtu.be/JxgmHe2NyeY?si=_FlpXN2PRcIyqT4Z" target="_blank" rel="noopener noreferrer">TensorFlow Machine Learning Tutorial</a></li>
          </ul>

          <br/>
          <p>
            Explore the following YouTube videos for best playlists to prepare for Machine Learning development interviews:
          </p>
          <ul>
            <li><a href="https://youtu.be/rBa3lcPQ2ec?si=tPVAh0V8fpcsCBhN" target="_blank" rel="noopener noreferrer">Machine Learning Interview Preparation Guide</a></li>
            <li><a href="https://youtu.be/hB1CTizqGFk?si=qO-oIx0aNptYe2ES" target="_blank" rel="noopener noreferrer">Common Machine Learning Interview Questions</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default MachineLearningDevelopmentDetails;
