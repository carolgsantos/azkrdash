import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated === true ? <Redirect to="/dashboard" /> : <Component {...props} />
            }
        />
    )
}

export default AuthRoute

AuthRoute.propTypes = {
    authenticated: PropTypes.bool,
    component: PropTypes.func,
}
