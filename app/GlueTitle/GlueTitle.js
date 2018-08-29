import React from 'react'

import FavoriteIcon from './FavoriteIcon'

const styles = {
  base: {
    margin: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 32px)',
    background: '#EAEAEA',
    paddingRight: '16px',
    paddingLeft: '16px'
  },

  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12 8',
    flex: '1 0 auto'
  },

  header: {
    margin: '4px 32px',
    textAlign: 'left',
    flex: '1 0 30%',
    paddingLeft: 32,
    fontWeight: 'normal',
    fontSize: '1.3em'
  },

  favoriteIcon: {
    height: '24px',
    width: '24px',
    marginLeft: "16px",
    cursor: 'pointer'
  },

  shrinkingHeader: {
    margin: '4px 32px',
    textAlign: 'left',
    flex: '1 1 30%',
    paddingLeft: 32,
    fontWeight: 'normal',
    fontSize: '1.3em'
  }

}

const GlueTitle = ({favorite=false}) =>
  <div style={styles.base}>
    <FavoriteIcon style={styles.favoriteIcon} color={favorite ? "#333" : "#ffc700"}/>
    <div style={styles.innerWrapper}>
      <h2 style={styles.header}> GraphQL Example </h2>
      <h2 style={styles.shrinkingHeader}> graphql, js </h2>
      <h2 style={styles.shrinkingHeader}> Arman Elahi </h2>
    </div>
  </div>

GlueTitle.defaultProps = {
  favorite: false
}

export default GlueTitle
