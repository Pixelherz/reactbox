import { useEffect } from 'react'
import PropTypes from 'prop-types'

const ScrollDistanceObserver = ({
  onScrollDistYUpdate,
  isActive = true,
  intervalDelay = 250,
}) => {
  let initialScrollY = 0
  let observerInterval = null
  let scrollDistY = 0

  const handleScroll = () => {
    const distY = Math.abs(window.scrollY - initialScrollY)
    if (distY !== scrollDistY) {
      scrollDistY = distY
      onScrollDistYUpdate(scrollDistY)
    }
  }

  useEffect(() => {
    clearInterval(observerInterval)
    if (isActive) {
      setTimeout(() => {
        initialScrollY = window.scrollY
      }, 1)
      observerInterval = setInterval(handleScroll, intervalDelay)
      return () => {
        clearInterval(observerInterval)
      }
    }
  }, [isActive])

  return null
}

ScrollDistanceObserver.propTypes = {
  onScrollDistYUpdate: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  intervalDelay: PropTypes.number,
}

export default ScrollDistanceObserver
