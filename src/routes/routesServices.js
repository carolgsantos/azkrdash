import React from 'react'
import { Route } from 'react-router-dom'
import { uniqBy } from 'lodash'

import rolesConfig from './roles'

import * as Routes from './routes'

const routesServices = (authenticated, role) => {
    const allowedRoutesMenu = []
    if (authenticated) {
        let roles = []
        if (role) {
            roles = ['common', ...role]

            /**
             * Reduce all components
             */
            let allowedRoutes = roles.reduce((acc, indexRole) => {
                return [...acc, ...rolesConfig[indexRole].routes]
            }, [])

            /**
             * For removing duplicate entries, compare with 'url'.
             */
            allowedRoutes = uniqBy(allowedRoutes, 'title')

            /**
             * Collect menu items for the navigation (not all components need to be displayed on the menu)
             */

            allowedRoutesMenu.push(
                ...allowedRoutes.map((route) => {
                    return (
                        <Route
                            exact
                            key={route.title}
                            path={route.url}
                            url={route.url}
                            title={route.title}
                            icon={route.icon}
                            menu={route.menu}
                            component={Routes[route.component]}
                        />
                    )
                }),
            )

            return allowedRoutesMenu
        }
    }
    return allowedRoutesMenu
}

export default routesServices
