import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

let mapStateToProps = (state) => {
  return {
    friends: state.dialogsPage.people
  }
}


export default connect(mapStateToProps)(Nav);