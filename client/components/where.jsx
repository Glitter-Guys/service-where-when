import React from 'react'
import ReactDOM from 'react-dom'
import SVG  from 'react-inlinesvg'
// import styles from './styles/styles.css'

let Where = ({whereData}) => (
  <div className="where">
    <div className="where__icon">
      <SVG viewBox="0 0 24 24" height="24" width="24" src="./icons/location.svg"></SVG>
    </div>
    <div className="where__text">
      <span>{whereData.venue_name}</span>
      <address>{whereData.address_1}{whereData.address_2}{whereData.address_3} ∙ {whereData.city}</address>
    </div>
  </div>
)

export default Where;
