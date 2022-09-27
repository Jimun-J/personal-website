import React, { useRef, useEffect } from 'react'
import "./About.css"
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import node from '../../img/node.png'
import react from '../../img/react.png'
import material from '../../img/material.png'
import git from '../../img/git.png'
import Image from '../../img/stock-image.jpg'

const About = () => {

  const about = useRef();
  const element1 = useRef();
  const element2 = useRef();
  const element3 = useRef();
  const element4 = useRef();
  const element5 = useRef();
  const element6 = useRef();
  const element7 = useRef();

  useEffect(() => {
    window.addEventListener('scroll', addClass);
  }, []);

  const addClass = () => {
    if (about.current) {
      if ((window.pageYOffset > about.current.offsetTop - 10)
        || window.pageYOffset > about.current.offsetBottom) {
        element1.current.classList.add('element1');
        element2.current.classList.add('element2');
        element3.current.classList.add('element3');
        element4.current.classList.add('element4');
        element5.current.classList.add('element5');
        element6.current.classList.add('element6');
        element7.current.classList.add('element7');
      } else {
        element1.current.classList.remove('element1');
        element2.current.classList.remove('element2');
        element3.current.classList.remove('element3');
        element4.current.classList.remove('element4');
        element5.current.classList.remove('element5');
        element6.current.classList.remove('element6');
        element7.current.classList.remove('element7');
      }
    }
  }

  return (
    <div className="About" id="About" ref={about} name="About">
      <div className="s-e-wrapper">
        
        <div className="experience">
          <div className="e-card bg"></div>
          <div className="e-card">
            <img src={Image} alt="" className="e-img" />
          </div>
        </div>

        <div className="skills-wrapper">
          <h1>About Me</h1>
          <div className="text">
            I design and develop web applications, specializing in creating stylish, modern websites. <br/>
            I am motivated and always eager to apply my skillset to develop a modern website<br />
          </div>
          <div className="skills">
            <div ref={element1}><img src={html} alt="" />HTML5</div>
            <div ref={element2}><img src={css} alt="" />CSS3</div>
            <div ref={element3}><img src={javascript} alt="" />JavaScript</div>
            <div ref={element4}><img src={node} alt="" />Node JS</div>
            <div ref={element5}><img src={react} alt="" />React JS</div>
            <div ref={element6}><img src={material} alt="" />Material UI</div>
            <div ref={element7}><img src={git} alt="" />Git</div>
          </div>
          <a className="blog-opener" href="/" target="_blank"><span>Learn More</span></a>
        </div>
      </div>
    </div>
  )
}

export default About