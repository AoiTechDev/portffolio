import React from 'react'
import '@styles/_blob.sass'
const Blob = ({text}) => {
  return (
    <div className="gooey" data-text={text}></div>
  )
}
export default Blob