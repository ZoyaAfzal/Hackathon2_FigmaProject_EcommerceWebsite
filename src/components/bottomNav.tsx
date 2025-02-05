import React from 'react'

function BottomNav() {
  return (
    <div className='w-full h-14 hidden md:flex lg:w-[1262px] max-w-[1344px] bg-colors-bgColor  justify-center items-center border-b-[1px] border-gray-200
    '>
        <h1 className='font-semibold text-[16px] text-[#111111] mb-7 hover:text-colors-secondaryColor hover:underline duration-200'>Hello Nike App</h1>
        <p className='absolute text-sm text-[#111111] mt-6'>Download the app to access everything Nike. <span className='text-sm font-semibold underline underline-offset-1 hover:text-colors-secondaryColor'>Get your Great</span></p>

    </div>
  )
}

export default BottomNav;