import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({pathTo,pageName}) => {
  return (
    <Link
    to='#'
    className="capitalize text-sm hover:underline cursor-pointer py-2 px-4 rounded-full"
  >
    {pathTo}
  </Link>
  )
}

export default NavItem