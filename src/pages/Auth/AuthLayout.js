import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../images/logo/logo.svg'
/** Components */
import { Button } from '../../components/index'

const AuthLayout = ({ children }) => {
    return (
        <section className="authorisation">
            <div className="authorisation__container">
                <div className="authorisation__header">
                    <img className="authorisation__logo" src={Logo} alt="Logo" />
                    <Button className="button-transparent" type="button">
                        Quero ser parceiro
                    </Button>
                </div>
                <div className="authorisation__content">
                    <img className="authorisation__logo" src={Logo} alt="Logo" />
                    <div className="authorisation__form authorisation-form">
                        {window.location.href.split('/')[3] === 'signin' && (
                            <div className="authorisation-form__header">
                                <h2 className="authorisation-form__title">Acesso ao Painel</h2>
                            </div>
                        )}

                        {children}
                    </div>
                </div>
            </div>
            <div className="authorisation-bg" />
        </section>
    )
}

export default AuthLayout

AuthLayout.propTypes = {
    children: PropTypes.instanceOf(Array),
}
