import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

const DetailsPage = () => {
  const {id} = useParams();
  const [name,setname] = useState();
  const [role,setrole] = useState();
  const [department,setdepartment] = useState();
  const navigate = useNavigate();

  const handleCancel = ()=>{
    navigate('/')
  }

  const fetchEmployeeDetails = async ()=>{
     try {
         const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`,
          {
            method:'GET',
            headers:{
                'projectId': '66ab6c2d7d024c0353da8862',
                'environmentId': '66ab6c2d7d024c0353da8863'
            }
          }
        )
        const data = await response.json();
        setname(data.name)
        setrole(data.role)
        setdepartment(data.department)
     } catch (error) {
        console.log(error);
     }
  }
  
  const handleSave = async ()=>{
      try {
          const res = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`,
            {
               method:'PUT',
               headers:{
                'projectId': '66ab6c2d7d024c0353da8862',
                'environmentId': '66ab6c2d7d024c0353da8863'
               },
               body: JSON.stringify({
                'name' : `${name}`,
                'role' : `${role}`,
                'department' : `${department}`
               })
            }
          )
          if(res.status===200){
            toast.success('Employee Details Updated')
          }
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    fetchEmployeeDetails();
  },[])  
  
  const handleNameChange = (e)=>{
    setname(e.target.value)
  }
  const handleRoleChange = (e)=>{
    setrole(e.target.value)

  }
  const handleDepartmentChange = (e)=>{
    setdepartment(e.target.value)

  }
  
  return (
    <div className='flex flex-col mx-[50px] my-5 gap-5 items-center'>
        <div className='flex flex-row gap-4 items-center'>
          <h1 className='text-[20px] font-medium'>Full Name:</h1>
          <input type='text' contentEditable={true} value={name} onChange={handleNameChange} className='text-[17px] px-3 py-1 outline-none border-[2px] rounded-md'/>
        </div>

        <div className='flex flex-row gap-4 items-center'>
          <h1 className='text-[20px] font-medium'>Designation:</h1>
          <input type='text' contentEditable={true} value={role} onChange={handleRoleChange} className='text-[17px] px-3 py-1 outline-none border-[2px] rounded-md'/>
        </div>

        <div className='flex flex-row gap-4 items-center'>
          <h1 className='text-[20px] font-medium'>Department:</h1>
          <input type='text'  contentEditable={true} value={department} onChange={handleDepartmentChange} className='text-[17px] px-3 py-1 outline-none border-[2px] rounded-md'/>
        </div>

        <div className='flex flex-row mt-3 justify-between items-center gap-5'>
           <div className='cursor-pointer px-3 py-1 text-center bg-[#ffff] text-[#702eea] border-[1.5px] rounded-md'
            onClick={handleCancel}>
              Cancel
            </div>
           <div className='cursor-pointer px-3 py-1 text-center bg-[#702eea] text-white
            border-[1.5px] border-[#702eea] rounded-md' onClick={handleSave}>
              Save
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default DetailsPage