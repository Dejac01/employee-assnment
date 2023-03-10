import React from 'react'
import Header from './Header'
function EmployeePage(props) {
  return (
    <div className='ePage'>
      <Header passedProp={props.yourTitle}/>
      
    </div>
  )
}
export default EmployeePage