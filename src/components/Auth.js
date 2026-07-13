import React from 'react'
import { Outlet } from 'react-router';

const Auth = () => {
  return (
    <div>
        Auth Page: This page is about authentication

        <Outlet />

        SIgnup karo nai to nai aane dete
    </div>
  )
}

export default Auth