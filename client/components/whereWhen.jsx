import React from 'react'
import ReactDOM from 'react-dom'
import When from './when.jsx'
import Where from './where.jsx'
// import styles from './styles/styles.css'

let WhereWhen = (props) => (
  <div className="whereWhen">
    <When />
    <Where />
  </div>
);

export default WhereWhen;
