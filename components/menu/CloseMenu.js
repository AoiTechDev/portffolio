import React from 'react'

const CloseMenu = ({onClick}) => {
  return (
    <div id="burger-menu-close" onClick={onClick}>
        <span></span>
        <span></span>
      </div>
  )
}

export default CloseMenu;