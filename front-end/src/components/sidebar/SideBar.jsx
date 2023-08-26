import React from 'react'
import { AddContact, Navbar, SearchBox } from './content'

function SideBar() {
  return (
    <aside className='flex flex-col justify-between gap-5'>
        <SearchBox/>
        <Navbar/>
        <AddContact/>
    </aside>
  )
}

export default SideBar