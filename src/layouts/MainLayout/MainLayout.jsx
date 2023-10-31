import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SideNav } from './components/SideNav'
import { TopNav } from './components/TopNav'
import LayoutContainer from './components/LayoutContainer'
import LayoutRoot from './components/LayoutRoot'

function MainLayout() {
  const location = useLocation()
  const { pathname } = location
  const [openNav, setOpenNav] = useState(false)

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false)
    }
  }, [openNav])

  useEffect(
    () => {
      handlePathnameChange()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  )

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </LayoutRoot>
    </>
  )
}

export default MainLayout
