import React from 'react'
import ReactDOM from 'react-dom'
import WhereWhen from './components/whereWhen.jsx'
import { googleMapsKey } from './../../config/apiKeys';

global.googleMapsKey = googleMapsKey;

ReactDOM.render(<WhereWhen />, document.getElementById('where-when'));
