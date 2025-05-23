import React from 'react'
import { Outlet } from 'react-router'
export default function _layout() {
  return (
    <div>
      _layout
      <Outlet />
    </div>
  )
}
