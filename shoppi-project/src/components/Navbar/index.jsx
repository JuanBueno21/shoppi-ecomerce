import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom"
import { ShoppingCardContext } from "../../context"

const Navbar = () => {
  const context = useContext(ShoppingCardContext)
  const activeStyle = "underline underline-offset-4"

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-lg font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            Shoppi
          </NavLink>
        </li>
        <li>
          <NavLink to="/all" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/fornitures" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/others" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/30">
          galvezjuancamilo@gmail.com
        </li>
        <li>
          <NavLink to="/my-order" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
        <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
        <div>
        {context.count}
        </div>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar