import React from 'react'
import { Header, Info, Note, Reminder } from './content'

function User() {
  return (
    <div className="flex flex-col gap-5 flex-1">
        <Header/>
        <Info/>
        <Reminder/>
        <Note/>
    </div>
  )
}

export default User