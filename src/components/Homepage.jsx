import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
function Homepage(props) {
  return (
    <div className="hpage">
      <Header passedProp={props.yourTitle}/>
      <SearchBar />
      <EmployeeList workers={props.staff}/>
    </div>
  )
}
export default Homepage