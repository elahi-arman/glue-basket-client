import React from 'react';

import AddIcon from './AddIcon'
import SearchInputContainer from './SearchInput/SearchInputContainer'

const styles = {
  wrapperStyle: {
    margin: '8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 32px)',
    paddingLeft: '16px',
  },

  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8 24',
    flex: '1 0 auto'
  },

  addButton: {
    marginLeft: '8px'
  },
};

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const SearchRow = () => (
  <div style={styles.wrapperStyle}>
    <AddIcon style={styles.addButton} />
    <div style={styles.innerWrapper}>
      <SearchInputContainer />
      <SearchInputContainer />
      <SearchInputContainer />      
    </div>
  </div>
);

export default SearchRow;
