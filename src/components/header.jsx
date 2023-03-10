import React from 'react'

function Header(props) {
  return (
    <div className="skull">
      {props.passedProp}
    </div>
  )
}

export default Header