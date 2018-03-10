import React from 'react';
import When from './when.jsx';
import Where from './where.jsx';
import Map from './map.jsx';
// import styles from './styles/styles.css'

export default class WhereWhen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whereData: {},
      whenData: {},
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const urlEnd = url.split('/event/')[1];
    const eventId = urlEnd.split('/')[0];
    fetch(`/api/${eventId}/wherewhen`).then((response) => {
      return response.json();
    }).then((jsonData) => {
      this.setState({
        whereData: jsonData.whereData,
        whenData: jsonData.whenData,
      });
    }).catch((err) => {
      throw new Error(err);
    });
  }

  render() {
    const { whereData } = this.state;
    return (
      <div className="whereWhen">
        <When whenData={this.state.whenData} />
        <Where whereData={whereData} />
        {whereData.venuePublic &&
          <Map
            latitude={whereData.latitude}
            longitude={whereData.longitude}
            whereData={whereData}
          />
        }
      </div>
    );
  }
}
