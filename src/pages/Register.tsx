import React from 'react'
import './Registration.css'

export const RegistrationPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <div className="registration-form">
                <div>
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="text"/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input id="confirmPassword" type="text"/>
                </div>
                <button className="register-button">Register</button>
            </div>
        </div>
    )
}