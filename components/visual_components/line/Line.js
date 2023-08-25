import React from 'react'
import '@styles/styles.sass'
import Image from 'next/image'
import leaf from '@assets/icons/leaf_icon.png'
const Line = ({style}) => {
  return (
    <div className="line-container" style={style}>
        <div className="left-line"></div>
        <Image src={leaf} width={30} height={30}/>
        <div className="right-line"></div>
    </div>
  )
}
export default Line