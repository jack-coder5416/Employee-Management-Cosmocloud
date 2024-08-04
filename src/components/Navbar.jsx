import React from 'react'
import { plus } from '../assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate();

  const handleAddClick = ()=>{
     navigate('/add-employee')
  }
  return (
    <div className='sticky flex flex-row px-7 py-3 border-[1px] border-[#f3f0f4]
     mx-10 my-4 rounded-xl font-semibold text-[17px] bg-[#702eea] text-[#fff] justify-between items-center'>
       <h1 className='text-[22px]' onClick={()=>{navigate('/')}}> Employee System </h1>
       <div className='bg-white flex flex-row justify-between gap-2 items-center rounded-2xl px-3 py-1
        text-[#702eea] shadow-2xl cursor-pointer hover:scale-[1.02]'
         onClick={handleAddClick}
        >
         <img src={plus} width="20px" height="20px"/>
         <h1>Add Employee</h1>
       </div>
    </div>
  )
}

export default Navbar