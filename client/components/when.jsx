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

    return (
      <div className="when">
        <div className="where__icon">
          <SVG viewBox="0 0 24 24" height="24" width="24" src="./icons/clock.svg"></SVG>
        </div>
        <div className="when__text">
          {this.props.whenData.multiDay ?
            <span>
              <span><Moment format="dddd, MMMM D YYYY h:mm A">{this.props.whenData.start_time}</Moment></span>
              <span>to&nbsp;<Moment format="dddd, MMMM D YYYY h:mm A">{this.props.whenData.end_time}</Moment></span>
            </span>
          :
            <span>
              <span>
                <Moment format="dddd, MMMM D YYYY">{this.props.whenData.start_time}</Moment>
              </span>
              <Moment format="h:mm A">{this.props.whenData.start_time}</Moment>&nbsp;to&nbsp;
              <Moment format="h:mm A">{this.props.whenData.end_time}</Moment>
            </span>
          }
        </div>
      </div>
    )
  }
}
