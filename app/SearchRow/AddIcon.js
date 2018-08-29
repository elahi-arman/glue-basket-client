import React from 'react'

const AddIcon = ({color='#333', style={}}) => (
  <svg 
    style={style}
    viewBox="0 0 24 24" 
    width="24" 
    height="24"
    fill={color}>
     <path 
      className="heroicon-ui" 
      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"/>
  </svg>
)

export default AddIcon