import React from 'react'

import SearchIcon from './SearchIcon'

const styles = {
  container: {
    display: 'flex',
    flex: '1 0 auto',
    position: 'relative',
    background: '#eee',
    alignItems: 'center',
    paddingLeft: '8px',
    marginLeft: '2px',
    marginRight: '2px',
    borderBottom: '3px solid transparent',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
  },

  focusedContainer: {
    borderBottom: '3px solid #a29bfe'
  },

  input: {
    width: '100%',
    background: 'transparent',
    color: '#333',
    zIndex: 10,
    fontWeight: '500',
    border: '0',
    padding: '16',
    outline: 'none',
  },
  
}

const SearchInput = ({value, toggleFocus, isFocused}) => {
  const onFocus = toggleFocus.bind(this, true)
  const onBlur = toggleFocus.bind(this, false)

  return (
    <div style={Object.assign({}, styles.container, isFocused ? styles.focusedContainer : {})}>  
      <SearchIcon />
      <input 
        style= {styles.input} 
        onFocus={onFocus} 
        onBlur={onBlur} 
        placeholder='Search'/>
    </div>  
  )
  
}

export default SearchInput