import React from 'react'
import ReactDOM from 'react-dom'
import SVG  from 'react-inlinesvg'
// import styles from './styles/styles.css'

let When = (props) => (
  <div className="when">
    <div className="where__icon">
      <SVG viewBox="0 0 24 24" height="24" width="24" src="./icons/clock.svg"></SVG>
    </div>
    <div className="when__text">
      <span>Monday, March 5, 2018</span>
      <span>6:00 PM to 8:30 PM</span>
    </div>
  </div>
);

export default When;
