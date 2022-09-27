import React from 'react';
import "./main.css"
import Pdf from '../../Document/Resume.pdf'

const Main = () => {

  return (
    <div className="Main" id="Main" name="Main">
      <div className="main">
        <div className="main-wrapper">
          <h2 className="intro">Hello, My name is</h2>
          <h2 className="name">Jimun Jang</h2>

          <div className="main-title">
            <div className="main-title-wrapper">
              <div className="main-title-item">Web Developer</div>
              <div className="main-title-item">UI/UX Designer</div>
              <div className="main-title-item">Photographer</div>
            </div>
          </div>

          <a className="resume-opener" href={Pdf} target="_blank" rel="noopener noreferrer">View Resume</a>

        </div>
      </div>
    </div>

  )
}

export default Main