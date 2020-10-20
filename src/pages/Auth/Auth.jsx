import React from 'react'
import { Route } from 'react-router-dom'

/** Auth modules */
import { LoginForm, RenewPassword, RenewPasswordEmail } from '../../modules'

/** Auth wrapper */
import AuthLayout from './AuthLayout'

const Auth = () => {
    return (
        <>
            <AuthLayout>
                <Route exact path="/signin" component={LoginForm} />
                <Route exact path="/renew-password" component={RenewPassword} />
                <Route exact path="/renew-password-email" component={RenewPasswordEmail} />
            </AuthLayout>
        </>
    )
}

export default Auth
