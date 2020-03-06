import React from 'react'
import Header from "./../Component/Header"
import Searchbar from "./../Component/Searchbar"
import Case from "./../Component/Case"
import CaseLargeLeft from "../Component/CaseLargeLeft"
import CaseLargeRight from "../Component/CaseLargeRight"
import "./views.css"

function Work() {
  return (
    <div>
    <Header /> 
    <Searchbar/>
    <div className="mainContent">
    <Case/>
    <Case/>
    <Case/>
    <Case/>
    <CaseLargeLeft/>
    <Case/>
    <Case/>
    <CaseLargeRight/>
    <Case/>
    <Case/>
    <Case/>
    <Case/>
    

    </div>
    </div>
  )
}

export default Work

