// material-ui
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import nProgress from 'nprogress'
import { useEffect, useRef } from 'react'

// styles
const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
})

// ==============================|| LOADER ||============================== //
const Loader = () => {
  const ref = useRef(false)

  useEffect(() => {
    if (ref.current === true) {
      nProgress.configure({ showSpinner: false })
      nProgress.start()
    }

    return () => {
      if (ref.current === true) {
        nProgress.done()
      }
      ref.current = true
    }
  }, [])

  return (
    <LoaderWrapper>
      <LinearProgress color="primary" />
    </LoaderWrapper>
  )
}

export default Loader
