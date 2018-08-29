import React from 'react'

import SearchInput from './SearchInput'

class SearchInputContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isFocused: false
    }
    
    this.toggleFocus = this.toggleFocus.bind(this)
  }

  toggleFocus(focused, event){
    console.log('called as ', focused)
    this.setState(state => {
      console.log(`Setting state`, state)
      return Object.assign({}, state, {isFocused: !state.isFocused})
    })
  }
  
  render(){
    return (
      <SearchInput
        toggleFocus={this.toggleFocus} 
        isFocused={this.state.isFocused} />
    )
  }
}

export default SearchInputContainer