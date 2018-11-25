import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLogin } from '../../store/actions'

const Home = ({ loginUser }) => {
  return (
    <React.Fragment>
      <h1>Home page</h1>
      <button
        onClick={() => {
          loginUser()
        }}
      >
                Login
      </button>
    </React.Fragment>
  )
}

Home.propTypes = {
  loginUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  loginUser: userLogin,
}

export default connect(
  null,
  mapDispatchToProps
)(Home)
