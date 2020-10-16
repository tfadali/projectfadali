import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutPage } from './pages/About'
import { LoginPage } from './pages/Login'
import { Problem } from './pages/Problem'
import { ProblemsPage } from './pages/Problems'
import { RegistrationPage } from './pages/Register'

export const Routes = () => (
    <div>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route exact path="/problems">
            <ProblemsPage/>
          </Route>
          <Route path="/problems/:id">
            <Problem/>
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