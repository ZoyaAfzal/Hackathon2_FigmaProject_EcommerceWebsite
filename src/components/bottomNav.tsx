import React from 'react'

function BottomNav() {
  return (
    <div className='w-full h-14 top-0 sticky hidden md:flex bg-colors-bgColor  justify-center items-center border-b-[1px] border-gray-200
    '>
        <h1 className='font-semibold text-[16px] text-[#111111] mb-7'>Hello Nike App</h1>
        <p className='absolute text-sm text-[#111111] mt-6'>Download the app to access everything Nike. <span className='text-sm font-semibold underline underline-offset-1'>Get your Great</span></p>

    </div>
  )
}

export default BottomNav;