import React from 'react'
import ReactDOM from 'react-dom'
import SVG  from 'react-inlinesvg'
// import styles from './styles/styles.css'

let Where = (props) => (
  <div className="where">
    <div className="where__icon">
      <SVG height="24" width="24" src="./icons/location.svg"></SVG>
    </div>
    <div className="where__text">
      <span>Lyft HQ</span>
      <address>185 Berry Street ∙ San Francisco</address>
    </div>
  </div>
);

export default Where;
