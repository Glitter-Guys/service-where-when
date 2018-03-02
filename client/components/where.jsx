import React from 'react';
import SVG from 'react-inlinesvg';
// import styles from './styles/styles.css'

const Where = ({ whereData }) => (
  <div className="where">
    <div className="where__icon">
      <SVG viewBox="0 0 24 24" height="24" width="24" src="./icons/location.svg" />
    </div>
    <div className="where__text">
      {whereData.venueName ?
        <span>
          <span>{whereData.venueName}</span>
          <address>
            {whereData.address1}
            {whereData.address2}
            {whereData.address3} ∙ {whereData.city}
          </address>
        </span>
      : <span>Needs a location</span>}
    </div>
  </div>
);

export default Where;
