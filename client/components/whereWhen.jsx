import React from 'react'
import ReactDOM from 'react-dom'
import When from './when.jsx'
import Where from './where.jsx'
// import styles from './styles/styles.css'

export default class WhereWhen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      whereData: {},
      whenData: {}
    }
  }

  componentDidMount(){
    let url = window.location.href;
    let urlEnd = url.split('/event/')[1];
    let eventId = urlEnd.split('/')[0];
    fetch('/api/event/' + eventId).then((response) => {
      return response.json();
    }).then((jsonData) => {
        this.setState({
          whereData: jsonData.whereData,
          whenData: jsonData.whenData
        })
    }).catch((err) => {
        throw new Error(err);
    });
  }

  render(){
    return (
      <div className="whereWhen">
        <When whenData={this.state.whenData}/>
        <Where whereData={this.state.whereData} />
      </div>
    )
  }
}
