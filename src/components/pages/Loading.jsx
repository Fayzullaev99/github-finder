import React from 'react'
import spinner from '../../images/spinner.gif'
function Loading() {
  return (
    <div className="loading">
        <img src={spinner} alt="" className="loading" />
    </div>
  )
}

export default Loading