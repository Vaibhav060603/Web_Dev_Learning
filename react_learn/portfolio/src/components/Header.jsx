import React, { useEffect, useState } from 'react';
import "./Header.css";
import Background from "./Background.jsx"
import Footer from './Footer.jsx';
import Skill_Box from './Skill_Box.jsx';
import Project_box from './Project_box.jsx';


export default function Header() {

  const [aboutMeText, setAboutMeText] = useState("A little bit about myself.");

  const skillsArray = [{ imageUrl: "./public/java_img.png", skillText: "Java" },
  { imageUrl: "./public/java_img.png", skillText: "HTML5" },
  { imageUrl: "./public/java_img.png", skillText: "CSS3" },
  { imageUrl: "./public/java_img.png", skillText: "Javascript" },
  { imageUrl: "./public/java_img.png", skillText: "React" },
  { imageUrl: "./public/java_img.png", skillText: "MongoDB" },
  { imageUrl: "./public/java_img.png", skillText: "Linux" },
  { imageUrl: "./public/java_img.png", skillText: "Data Structure" }

  ];


  useEffect(() => {

    //starting the change of "about me" text. 
    let theText = "A little bit about myself.";
    let count = 0;
    let isReverse = false;

    const addText = setInterval(() => {
      setAboutMeText(theText.substring(0, count));
      if (!isReverse) {
        count++;
        if (count === theText.length) {
          isReverse = true;
        }
      }
      else if (isReverse) {
        count--;
        if (count === 1) {
          isReverse = false;
        }
      }

    }, 120);


    return () => {
      //end the change of "about me" text after the user quits the site.
      clearInterval(addText);
    }

  }, []);

  return (
    <>

      <Background />


      <div id='idh5'>
        <div className='ch1'>
          <div className='ch3'>
            <li className='ch4'><a className='ch2' href="">About</a></li>
            <li className='ch4'><a className='ch2' href="">Skills</a></li>
            <li className='ch4'><a className='ch2' href="">Projects</a></li>
            <li className='ch4'><a className='ch2' href="">Contact</a></li>
          </div>

          <p className='ch2' id='idh2'>Hello! I'm Vaibhav.</p>
          <p className='ch2' id='idh3'>Your front-end developer.</p>

        </div>

        <div className='ch5'>
          <p id='idh6'>{aboutMeText}|</p>
          <br />
          <span id='idh7'></span>

          <p id='idh8'>Hey there 👋 , I’m Vaibhav Kankanwadi. Nice to meet you.</p>

          <p id='idh9'>I'm an undergraduate studying Computer Engineering. I'm quietly confident, naturally curious, and continuously working on improving my practical skills.</p>
        </div>



        <div id='idh11'>
          <p id='idh12'>My Skills</p>
          <div id='idh13'>
            {skillsArray.map((item) => (
              <Skill_Box key={item.skillText} imageUrl={item.imageUrl} skillText={item.skillText} />
            ))}
          </div>
        </div>



        <div id='idh14'>
          <p id='idh15'>My Projects</p>
          <div id='idh16'>
            <Project_box/>
          </div>  
        </div>





        <Footer />

      </div>





    </>
  )
}
