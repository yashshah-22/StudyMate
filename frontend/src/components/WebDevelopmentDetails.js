// WebDevelopmentDetails.js
import React from 'react';
import './DomainDetails.css'; // Add your CSS styling
import web from '../images/web.webp';
import gettingstarted from "../images/started.webp";
import roadmap from "../images/roadmapweb.png";
import career from "../images/webdevcareer.jpg";
import languages from "../images/languageswebdev.jpeg";
import salary from "../images/salarywebdev.jpg";


const WebDevelopmentDetails = () => {
  return (
    <div className="domain-details">
        <div className="content">
          <h2 style={{textAlign:"center",textDecoration:"underline",fontWeight:"bold"}}>Web Development</h2>
          <p>
            Web development involves building and maintaining websites. It encompasses front-end development (user interface) and back-end development (server-side logic). Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet, i.e., websites.
          </p>
        </div>
        <img src={web} style={{height:'500px',marginLeft:"150px"}}alt="Web Development" />
      <hr />

      <div className="section">
        <div className="content">
          <h3>Getting Started:</h3>
          <p>
            To start with web development, learn the basics of HTML, CSS, and JavaScript. Then, explore front-end or back-end frameworks based on your interest. Online platforms like freeCodeCamp, Codecademy, and MDN Web Docs are great resources.
            Developing these fundamental web development skills will give you the foundation and logic for communicating with programming languages.

How to become a Web Developer in five steps:
<br/>
1.Learn web development fundamentals<br/>
2.Choose a development specialization<br/>
3.Learn key programming languages for web development<br/>
4.Work on projects to develop your Web Developer skills<br/>
5.Build a web development portfolio
          </p>
        </div>
        <img src={gettingstarted} alt="Getting Started" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Languages Used:</h3>
          <p>
            Common languages for web development include HTML, CSS, JavaScript, and popular frameworks like React, Angular, or Vue for front-end development. For back-end development, languages like Node.js, Python, Ruby, and Java are commonly used.
          </p>
          <br/>
          <p>
          Developers use web development languages to help create dynamic web pages. The most common languages include JavaScript, Python, and C#. Developers choose the language to use based on whether they perform front-end or back-end development. In artificial intelligence creation, machine learning engineers also use programming languages to develop applications.
          </p>
        </div>
        <img src={languages} alt="Languages Used" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Roadmap:</h3>
          <p>
            Follow a roadmap that includes learning key technologies, building projects, and gaining practical experience. Watch tutorials on YouTube to enhance your skills and stay updated with industry trends.
          </p>
          <p>
          To help grasp the role better, here is a typical journey that a web developer will take over their career:
<ul>


<li>Education: A degree in Computer Science or equivalent technical background is nice but optional. Many web developers get started with online courses, tutorials, and self-guided learning. </li>
<li>Building a Portfolio: Creating a personal portfolio by working on small personal projects, or contributing to open-source initiatives, demonstrates skills and can make a candidate more attractive to employers.</li>
<li>Entry-Level Position: Starting as a junior web developer, a new professional will likely work under the guidance of a more experienced developer, learning best practices and beginning to contribute to real-world projects.</li>
<li>Specialization: As skills grow, a developer may specialize in a certain area, such as Front-End Development, Back-End Development, or Full-Stack Development.</li>
</ul>
          </p>
        </div>
        <img src={roadmap} alt="Roadmap" className="section-image-small" />
      </div>
      <hr />
      <div className="section-videos">
        <h4 style={{ marginBottom: '30px',textAlign:"center" }}>Roadmap to Start With Web Development</h4>

        {/* Video 1 */}
        <div className="video-item" style={{ marginBottom: '20px',marginLeft:'300px'}}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z0n1aQ3IxWI"
            title="Roadmap to Web Development"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h3>Jobs and Career:</h3>
          <p>
            Web development offers numerous job opportunities. On average, thousands of web development jobs are produced every year. Many leading companies hire web developers, including Google, Facebook, Microsoft, and more.

            Web development offers a dynamic and expansive career landscape, with abundant job opportunities across various industries. Skilled web developers are in high demand, contributing to the design, development, and maintenance of websites and applications. Job roles include front-end and back-end developers, full-stack developers, and specialized roles such as UI/UX designers. Leading tech companies, startups, and enterprises actively seek web development expertise. Professionals in this field can enjoy competitive salaries, diverse projects, and continuous learning opportunities. With the ever-evolving digital landscape, a career in web development provides a rewarding journey filled with innovation and the chance to shape the online experiences of tomorrow.
          </p>
        </div>
        <img src={career} alt="Jobs and Career" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Average CTC:</h3>
          <p>
            The average CTC (Cost to Company) for web developers varies based on experience, location, and skills. It can range from $60,000 to $100,000 per year.
            On average, junior or entry-level web developers may expect a salary ranging from $60,000 to $80,000 annually. Mid-level developers with a few years of experience may earn salaries between $80,000 and $100,000. Senior or highly experienced web developers, especially those in leadership roles or with specialized skills, can command salaries exceeding $100,000, potentially reaching $120,000 or more.
          </p>
        </div>
        <img src={salary} alt="Average CTC" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>YouTube Resources:</h3>
          <p>
            Explore the following YouTube videos for best playlists to start learning web development:
          </p>
          <ul>
            <li><a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noopener noreferrer">Web Development for Beginners</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" target="_blank" rel="noopener noreferrer">Best Web Development Playlists from Beginner to Advanced</a></li>
          </ul>

          <br/>
          <p>
            Explore the following YouTube videos for best playlists to prepare for interviews for Web Developer Role:
          </p>
          <ul>
            <li><a href="https://youtu.be/0gTCpaUfTOE?si=3yVC4C0K_Q6xrblN" target="_blank" rel="noopener noreferrer">Top Interview Questions on Web Development</a></li>
            <li><a href="https://youtu.be/cbtGu5LCLRo?si=OhhY1l6yDTabzrZQ" target="_blank" rel="noopener noreferrer">Interview Preparation for Web Developers</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default WebDevelopmentDetails;
