// AndroidDevelopmentDetails.js
import React from 'react';
import './DomainDetails.css'; // Add your CSS styling
import android from '../images/android.jpeg';
import gettingstarted from "../images/gettingstarted2.png";
import roadmap from "../images/roadmap2.png";
import career from "../images/careers2.jpg";
import languages from "../images/languages2.jpeg";
import salary from "../images/salary2.png";

const AndroidDevelopmentDetails = () => {
  return (
    <div className="domain-details">
        <div className="content">
          <h2 style={{textAlign:"center",textDecoration:"underline",fontWeight:"bold"}}>Android Development</h2>
          <p>
            Android development involves creating applications for the Android operating system. It includes designing, developing, testing, and maintaining applications that run on Android devices. Android developers use Java or Kotlin programming languages along with the Android SDK to build innovative mobile applications.
          </p>
        </div>
        <img src={android} style={{height:'500px',marginLeft:"150px",width:"75%"}} alt="Android Development" />
      <hr />

      <div className="section">
        <div className="content">
          <h3>Getting Started:</h3>
          <p>
            To start with Android development, acquire a strong understanding of Java or Kotlin programming languages. Android Studio is the official IDE for Android development. Learn how to create user interfaces, handle user input, and work with device features.
            Getting started with Android development involves setting up your development environment, understanding the basics of Java or Kotlin, and familiarizing yourself with Android Studio. Online platforms like Udacity and Google's Android Developer Guide offer excellent resources.
          </p>
        </div>
        <img src={gettingstarted} alt="Getting Started" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Languages Used:</h3>
          <p>
            Android development primarily uses Java and Kotlin as programming languages. These languages are essential for creating the logic behind Android applications. Understanding XML is also crucial for designing user interfaces.
          </p>
          <br/>
          <p>
            Android developers leverage Java or Kotlin to build the functionality of their applications. XML is used for designing layouts, defining UI elements, and specifying app configuration. Kotlin, introduced as an official Android language, offers concise syntax and improved safety features.
          </p>
        </div>
        <img src={languages} alt="Languages Used" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Roadmap:</h3>
          <p>
            Follow a roadmap that includes learning key technologies, building projects, and gaining practical experience. Understand the Android development lifecycle, UI/UX design principles, and integration of various components.
          </p>
          <p>
            Android development roadmap:
            <ul>
              <li>Learn Java or Kotlin</li>
              <li>Understand Android components (Activities, Services, Broadcast Receivers, Content Providers)</li>
              <li>Master UI/UX design principles</li>
              <li>Explore data storage and retrieval (SQLite, Room database)</li>
              <li>Implement networking and web services</li>
              <li>Integrate third-party libraries</li>
              <li>Optimize performance and memory usage</li>
              <li>Test and debug applications</li>
            </ul>
          </p>
        </div>
        <img src={roadmap} alt="Roadmap" className="section-image-small" />
      </div>
      <hr />
      <div className="section-videos">
        <h4 style={{ marginBottom: '30px',textAlign:"center" }}>Roadmap to Start With Android Development</h4>

        {/* Video 1 */}
        <div className="video-item" style={{ marginBottom: '20px',marginLeft:'300px'}}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7nQsQ0rvYqQ"
            title="Roadmap to Android Development"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h3>Jobs and Career:</h3>
          <p>
            Android development offers diverse career opportunities, with roles such as Android Developer, Mobile App Developer, or Software Engineer. Many companies, including tech giants like Google, hire Android developers for creating innovative and user-friendly mobile applications.
            Android development offers a thriving career landscape, with roles like Android Developer, Mobile App Developer, or Software Engineer. Professionals in Android development create innovative, user-friendly mobile applications. Tech giants like Google actively seek Android developers. Roles span from entry-level to senior positions, and skilled developers are in high demand across industries. The dynamic field provides diverse projects, continuous learning, and competitive salaries, making Android development an exciting and rewarding career choice.
          </p>
        </div>
        <img src={career} alt="Jobs and Career" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Average CTC:</h3>
          <p>
            The average CTC (Cost to Company) for Android developers varies based on experience, location, and skills. Entry-level Android developers may earn salaries ranging from $50,000 to $70,000, while mid-level developers can expect salaries between $70,000 and $90,000. Senior Android developers with extensive experience may command salaries exceeding $100,000.
            For entry-level Android developers, the average salary typically ranges from $60,000 to $80,000 per year. As freshers gain experience, their salaries can increase, with mid-level Android developers earning between $80,000 and $100,000 annually. Senior or highly experienced Android developers, especially those in leadership roles or with specialized skills, may command salaries exceeding $100,000, potentially reaching $120,000 or more. The Android development field offers competitive compensation, making it an attractive choice for professionals starting their careers in mobile app development.
          </p>
        </div>
        <img src={salary} alt="Average CTC" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>YouTube Resources:</h3>
          <p>
            Explore the following YouTube videos for best playlists to start learning Android development:
          </p>
          <ul>
            <li><a href="https://www.youtube.com/playlist?list=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL" target="_blank" rel="noopener noreferrer">Android App Development for Beginners</a></li>
            <li><a href="https://youtu.be/mXjZQX3UzOs?si=hGbsZyGYekx-IjuS" target="_blank" rel="noopener noreferrer">Kotlin Android Development Tutorial</a></li>
          </ul>

          <br/>
          <p>
            Explore the following YouTube videos for best playlists to prepare for Android development interviews:
          </p>
          <ul>
            <li><a href="https://youtu.be/Qx5IF8o8u1U?si=rfGV9MKkOfL0bAJ6" target="_blank" rel="noopener noreferrer">Android Developer Interview Preparation</a></li>
            <li><a href="https://youtu.be/BJZNsTA0z5w?si=sbW6BwcUQr60qjFe" target="_blank" rel="noopener noreferrer">Common Android Development Interview Questions</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default AndroidDevelopmentDetails;
