import React from 'react'

const CloseMenu = ({onClick, style}) => {
  return (
    <div id="burger-menu-close" onClick={onClick}  >
        <span style={style}></span>
        <span style={style}></span>
      </div>
  )
}

export default CloseMenu;