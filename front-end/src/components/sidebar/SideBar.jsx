import React from 'react'
import { AddContact, Navbar, SearchBox } from './content'

function SideBar() {
  return (
    <aside>
        <SearchBox/>
        <Navbar/>
        <AddContact/>
    </aside>
  )
}

export default SideBar