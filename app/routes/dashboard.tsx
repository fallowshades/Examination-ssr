import React from 'react'
import { Outlet } from 'react-router'
export default function dashboard() {
  return (
      <div>dashboard
          <Outlet/>
    </div>
  )
}
