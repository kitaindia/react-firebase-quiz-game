import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {App, SmartDevice, Controller, Screen} from './containers'
import {NotFound} from './components'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={SmartDevice}/>
        <Route path="/controller" component={Controller}/>
        <Route path="/screen" component={Screen}/>
        <Route path="*" component={NotFound}/>
    </Route>
)
export default routes
