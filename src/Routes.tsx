import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutPage } from './pages/About'
import { LoginPage } from './pages/Login'
import { ProblemsPage } from './pages/Problems'
import { RegistrationPage } from './pages/Register'

export const Routes = () => (
    <div>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/problems">
            <ProblemsPage/>
          </Route>
          <Route path="/register">
            <RegistrationPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
    </div>
)