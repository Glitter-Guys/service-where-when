import React from 'react'
import ReactDOM from 'react-dom'
import SVG  from 'react-inlinesvg'
import Moment from 'react-moment';
// import styles from './styles/styles.css'

export default class When extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let { whenData } = this.props;
    let dateTimeFormat = "dddd, MMMM D YYYY h:mm A";
    let dateFormat = "dddd, MMMM D YYYY";
    let timeFormat = "h:mm A";

    return (
      <div className="when">
        <div className="where__icon">
          <SVG viewBox="0 0 24 24" height="24" width="24" src="./icons/clock.svg"></SVG>
        </div>
        <div className="when__text">
          {whenData.multiDay ?
            <span>
              <span><Moment format={dateTimeFormat}>{whenData.start_time}</Moment></span>
              <span>to&nbsp;<Moment format={dateTimeFormat}>{whenData.end_time}</Moment></span>
            </span>
          :
            <span>
              <span>
                <Moment format={dateFormat}>{whenData.start_time}</Moment>
              </span>
              <Moment format={timeFormat}>{whenData.start_time}</Moment>&nbsp;to&nbsp;
              <Moment format={timeFormat}>{whenData.end_time}</Moment>
            </span>
          }
        </div>
      </div>
    )
  }
}
