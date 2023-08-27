import React from 'react'
import { Header, Info, Note, Reminder } from './content'

function User() {
  return (
    <div className="flex flex-col gap-5 flex-1 rounded-2xl bg-gradient-to-t from-black to-gray-800 py-5">
        <Header/>
        <div className='bg-[rgb(24,24,24)] p-5 flex flex-col gap-5'>
            <Info/>
            <Reminder/>
            <Note/>
        </div>
    </div>
  )
}

export default User