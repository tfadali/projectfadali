import React from 'react'

export const LoginPage = () => {
    return <div>
        <h1>Sign In</h1>
        <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" value=""/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="text" name="password" value=""/>
        </div>
        <button>Sign In</button>
    </div>
}