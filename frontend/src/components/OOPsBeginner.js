import React from 'react';
import './DBMSBeginnerNotes.css';
const interviewVideos = [
  {
    title: "Top Interview Questions for OOPs",
    link: "https://www.youtube.com/live/DPCsnuYIl7A?si=P-eVfI2SHn0smJwd",
  },
  {
    title: "20 Important Interview Questions for OOPs",
    link: "https://youtu.be/-d-Stdl9PfQ?si=wdMxtDv-Y8-8vN6J",
  },
  // Add more interview videos as needed
];
const playlists = [
  {
    title: "Object-Oriented Programming Basics",
    link: "https://youtu.be/bSrm9RXwBaI?si=y6cbFzM2i-7YsJZ-"
  },
  {
    title: "Inheritance and Polymorphism Demystified",
    link: "https://youtu.be/a199KZGMNxk?si=Su8jbj1eqdIv3czu"
  },
  {
    title: "Encapsulation and Abstraction Explained",
    link: "https://youtu.be/6T_HgnjoYwM?si=ski6L2d8Habrnrfj"
  }
  // Add more playlists as needed
];
const OOPsBeginner = () => {
  const handlePlaylistClick = (playlistUrl) => {
    // You can implement the logic to redirect the user to the playlist page
    // or open the playlist in a modal, etc.
    window.open(playlistUrl, '_blank');
  };
  return (
    <div className="dbms-beginner-notes">
      <div className="s s-1">
        <h4>OBJECT ORIENTED PROGRAMMING</h4>
        <p>
          Object-Oriented Programming is a methodology or paradigm to design a
          program using classes and objects. It simplifies the software development
          and maintenance by providing some concepts defined below:
        </p>
      </div>

      <div className="s s-2">
        <h4>Class</h4>
        <p>
          Class is a user-defined data type which defines its properties and its
          functions. Class is the only logical representation of the data. For
          example, Human being is a class. The body parts of a human being are its
          properties, and the actions performed by the body parts are known as
          functions. The class does not occupy any memory space till the time an
          object is instantiated.
        </p>
        <p>C++ Syntax (for class):</p>
        <pre>
          {`
class student {
  public:
    int id; // data member
    int mobile;
    string name;
    int add(int x, y) { // member functions
      return x + y;
    }
};
          `}
        </pre>
      </div>

      <div className="s s-3">
        <h4>Object</h4>
        <p>
          Object is a run-time entity. It is an instance of the class. An object can
          represent a person, place or any other item. An object can operate on
          both data members and member functions.
        </p>
        <p>C++ Syntax (for object):</p>
        <pre>
          {`
student s = new student();
          `}
        </pre>
        <p>
          Note: When an object is created using the new keyword, then space is
          allocated for the variable in a heap, and the starting address is stored in
          the stack memory. When an object is created without a new keyword,
          then space is not allocated in the heap memory, and the object contains
          the null value in the stack.
        </p>
      </div>

      <div className="s s-4">
        <h4>Inheritance</h4>
        <p>
          Inheritance is a process in which one object acquires all the properties and
          behaviors of its parent object automatically. In such a way, you can reuse,
          extend or modify the attributes and behaviors which are defined in other
          classes.
        </p>
        <p>
          In C++, the class which inherits the members of another class is called
          derived class, and the class whose members are inherited is called base class.
          The derived class is the specialized class for the base class.
        </p>
        <p>C++ Syntax:</p>
        <pre>
          {`
class derived_class :: visibility-mode base_class;
          `}
        </pre>
        <p>Visibility Modes: {`{private, protected, public}`}</p>
      </div>

      <div className="s s-5">
        <h4>Types of Inheritance</h4>
        <p>1. Single inheritance: When one class inherits another class, it is known as single level inheritance.</p>
        <p>2. Multiple inheritance: Multiple inheritance is the process of deriving a new class that inherits the attributes from two or more classes.</p>
        <p>3. Hierarchical inheritance: Hierarchical inheritance is defined as the process of deriving more than one class from a base class.</p>
        <p>4. Multilevel inheritance: Multilevel inheritance is a process of deriving a class from another derived class.</p>
        <p>5. Hybrid inheritance: Hybrid inheritance is a combination of simple, multiple inheritance, and hierarchical inheritance.</p>
      </div>

      <div className="s s-6">
        <h4>Encapsulation</h4>
        <p>
          Encapsulation is the process of combining data and functions into a single
          unit called class. In Encapsulation, the data is not accessed directly; it is
          accessed through the functions present inside the class. In simpler words,
          attributes of the class are kept private, and public getter and setter methods
          are provided to manipulate these attributes. Thus, encapsulation makes the
          concept of data hiding possible.
        </p>
        <p>Data hiding: A language feature to restrict access to members of an object, reducing the negative effect due to dependencies (e.g., "protected," "private" feature in C++).</p>
      </div>

      <div className="s s-7">
        <h4>Abstraction</h4>
        <p>
          We try to obtain an abstract view, model, or structure of a real-life problem,
          and reduce its unnecessary details. With the definition of properties of
          problems, including the data which are affected and the operations which
          are identified, the model abstracted from problems can be a standard
          solution to this type of problems. It is an efficient way since there are
          nebulous real-life problems that have similar properties.
        </p>
        <p>Data binding: Data binding is a process of binding the application UI and
        business logic. Any change made in the business logic will reflect directly to the application UI.</p>
      </div>

      <div className="s s-8">
        <h4>Polymorphism</h4>
        <p>
          Polymorphism is the ability to present the same interface for differing
          underlying forms (data types). With polymorphism, each of these classes
          will have different underlying data. A point shape needs only two coordinates (assuming it's in a two-dimensional space of course). A circle needs a center and radius. A square or rectangle needs two coordinates for the top left and bottom right corners and (possibly) a rotation. An irregular polygon needs a series of lines. Precisely, Poly means 'many' and morphism means 'forms'.
        </p>
        <p>Types of Polymorphism:</p>
        <p>1. Compile Time Polymorphism (Static)</p>
        <p>2. Runtime Polymorphism (Dynamic)</p>
      </div>

      <div className="s s-9">
        <h4>Compile Time Polymorphism</h4>
        <p>
          The polymorphism which is implemented at the compile time is known as compile-time polymorphism. Example: Method Overloading
        </p>
        <p>Method Overloading: Method overloading is a technique which allows you
        to have more than one function with the same function name but with
        different functionality. Method overloading can be possible on the
        following basis:</p>
        <ul>
          <li>The return type of the overloaded function.</li>
          <li>The type of the parameters passed to the function.</li>
          <li>The number of parameters passed to the function.</li>
        </ul>
        <p>Example:</p>
        <pre>
          {`
#include<bits/stdc++.h>
using namespace std;
class Add {
public:
int add(int a,int b){
return (a + b);
}
int add(int a,int b,int c){
return (a + b + c);
}
};
int main(){
Add obj;
int res1,res2;
res1 = obj.add(2,3);
res2 = obj.add(2,3,4);
cout << res1 << " " << res2 << endl;
return 0;
}
/* Output : 5 9
add() is an overloaded function with a different number of parameters. */
          `}
        </pre>
      </div>

      <div className="s s-10">
        <h4>Runtime Polymorphism</h4>
        <p>
          Runtime polymorphism is also known as dynamic polymorphism. Function overriding is an example of runtime polymorphism. Function overriding means when the child class contains the method which is already present in the parent class. Hence, the child class overrides the method of the parent class. In case of function overriding, parent and child classes both contain the same function with a different definition. The call to the function is determined at runtime and is known as runtime polymorphism.
        </p>
        <p>C++ Sample Code:</p>
        <pre>
          {`
#include <bits/stdc++.h>
using namespace std;
class Base_class{
public:
virtual void show(){
cout << "Apni Kaksha base" << endl;
}
};
class Derived_class : public Base_class{
public:
void show(){
cout << "Apni Kaksha derived" << endl;
}
};
int main(){
Base_class* b;
Derived_class d;
b = &d;
b->show(); // prints the content of show() declared in the derived class
return 0;
}
          `}
        </pre>
      </div>
      
      <div className="s s-videos">
        <h4 style={{ marginBottom: '15px' }}>Best YouTube Video for OOPs Basics</h4>

        {/* Video 1 */}
        <div className="video-item" style={{ marginBottom: '20px' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bSrm9RXwBaI?si=y6cbFzM2i-7YsJZ-"
            title="OOps Fundamentals in One Shot"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="s s-playlist">
        <h4 style={{ marginBottom: '15px',fontWeight:"bold",textDecoration:"underline" }}>Best Playlists for OOPs Basics</h4>

        {/* Display playlists with links */}
        {playlists.map((playlist, index) => (
          <div
            key={index}
            className="playlist-item"
            onClick={() => handlePlaylistClick(playlist.link)}
            style={{
              padding: '10px',
              border: '1px solid black',
              borderRadius: '5px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
          >
            <p style={{ margin: '0' }}>{playlist.title}</p>
            <small style={{ color: 'blue' }}>{playlist.link}</small>
          </div>
        ))}
      </div>
      <div className="s s-interview-videos">
        <h4 style={{ marginBottom: '15px', fontWeight: "bold", textDecoration: "underline" }}>Top Interview Questions for OOPs</h4>

        {/* Display interview video links */}
        {interviewVideos.map((video, index) => (
          <div
            key={index}
            className="video-item"
            style={{ marginBottom: '10px' }}
          >
            <p style={{ margin: '0' }}>
              {video.title}: {" "}
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                {video.link}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OOPsBeginner;
