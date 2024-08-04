import React, { useState } from 'react'

const InputField = ({title,val, set}) => {
  
  const handleChange = (e)=>{
      set(e.target.value);
  }  
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-[18px] text-white'>{title}</label>
      <input value={val} className='w-fit border-[1px] border-[#333] outline-none px-2 py-1 rounded-[5px]' type='text' onChange={handleChange} />
    </div>
  )
}

export default InputField