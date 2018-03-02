import React from 'react';
import SVG from 'react-inlinesvg';
import Moment from 'react-moment';
// import styles from './styles/styles.css'

const When = ({ whenData }) => {
  // let { whenData } = this.props;
  const dateTimeFormat = 'dddd, MMMM D YYYY h:mm A';
  const dateFormat = 'dddd, MMMM D YYYY';
  const timeFormat = 'h:mm A';

  return (
    <div className="when">
      <div className="where__icon">
        <SVG viewBox="0 0 24 24" height="24" width="24" src="./icons/clock.svg" />
      </div>
      <div className="when__text">
        {whenData.multiDay ?
          <span>
            <span><Moment format={dateTimeFormat}>{whenData.startTime}</Moment></span>
            <span>to&nbsp;<Moment format={dateTimeFormat}>{whenData.endTime}</Moment></span>
          </span>
        :
          <span>
            <span>
              <Moment format={dateFormat}>{whenData.startTime}</Moment>
            </span>
            <Moment format={timeFormat}>{whenData.startTime}</Moment>&nbsp;to&nbsp;
            <Moment format={timeFormat}>{whenData.endTime}</Moment>
          </span>
        }
      </div>
    </div>
  );
};

export default When;
