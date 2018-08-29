import React from 'react';
import ReactDOM from 'react-dom';

import SearchRow from './SearchRow'
import GlueTitle from './GlueTitle/GlueTitle'

const styles = {
  containerStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    margin: 'auto',
    padding: '5%'
  }
}

const App = () => (
  <div style={styles.containerStyle}>
    <SearchRow />
    <GlueTitle />
    <GlueTitle favorite/>
    <GlueTitle />
    <GlueTitle favorite/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
