import React from 'react'
import { Logo, LogOutBtn, Container } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  console.log(authStatus);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },

  ]
  return (
    // Applied very dark background (bg-gray-900) and removed aggressive shadow for a clean edge
    <header className='py-5 bg-gray-900 text-gray-100 sticky top-0 z-50 border-b border-gray-800'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-8'>
            <Link to='/'>
              <Logo width='80px' />
            </Link>
          </div>
          <ul className='flex ml-auto space-x-1'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    // Navigation links are slightly larger (px-5 py-3), using the accent color (indigo-400) for hover
                    className='px-5 py-3 text-lg font-semibold duration-300 transition-colors hover:bg-gray-800 rounded-lg text-gray-300 hover:text-indigo-400'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                {/* Assuming LogOutBtn is styled as a prominent CTA button */}
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header