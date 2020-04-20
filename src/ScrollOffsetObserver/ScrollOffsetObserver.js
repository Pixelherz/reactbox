import { useEffect } from 'react'
import PropTypes from 'prop-types'

const ScrollOffsetObserver = ({
  onScrollOffsetYUpdate,
  isActive,
  intervalDelay,
}) => {
  let observerInterval = null
  let scrollOffsetY = 0

  const handleScroll = () => {
    const offsetY = window.scrollY
    if (offsetY !== scrollOffsetY) {
      scrollOffsetY = offsetY
      onScrollOffsetYUpdate(scrollOffsetY)
    }
  }

  useEffect(() => {
    clearInterval(observerInterval)
    if (isActive) {
      observerInterval = setInterval(handleScroll, intervalDelay)
      return () => {
        clearInterval(observerInterval)
      }
    }
  }, [isActive])

  return null
}

ScrollOffsetObserver.propTypes = {
  onScrollOffsetYUpdate: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  intervalDelay: PropTypes.number,
}

ScrollOffsetObserver.defaultProps = {
  isActive: true,
  intervalDelay: 250,
}

export default ScrollOffsetObserver
