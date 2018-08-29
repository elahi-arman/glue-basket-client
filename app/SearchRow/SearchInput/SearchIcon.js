import React from 'react'

const SearchICon = ({color='#333', style={}}) => (
  <svg 
    style={style}
    viewBox="0 0 24 24" 
    width="24" 
    height="24"
    fill={color}>
      <path 
        className="heroicon-ui" 
        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
  </svg>
)

export default SearchICon