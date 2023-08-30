import React from 'react'
import {MdErrorOutline} from "react-icons/md"

function Error() {
  return (
    <div className='flex items-center text-center justify-center gap-4 text-white font-semibold'>
        <MdErrorOutline className='text-xl'/>
        <p>خطا در هنگام دریافت اطلاعات از سرور</p>
        <MdErrorOutline className='text-xl'/>
    </div>
  )
}

export default Error