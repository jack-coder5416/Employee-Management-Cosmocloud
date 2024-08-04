import React, { useState } from 'react'
import InputField from '../components/InputField'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPage = () => {
  const [name,setname] = useState("");
  const [role,setrole] = useState("");  
  const [department,setdepartment] = useState("");  

  const handleAddClick = async ()=>{
        try {
            const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees`,{
                method:'POST',
                headers:{
                    'projectId': '66ab6c2d7d024c0353da8862',
                    'environmentId': '66ab6c2d7d024c0353da8863'
                },
                body: JSON.stringify({
                    'name' : `${name}`,
                    'role' : `${role}`,
                    'department' : `${department}`
                })
            })
            if(response.status === 201){
                toast.success('successfully added employee');
                setname('')
                setrole('')
                setdepartment('')
            }    
            

        } catch (error) {
            toast.error(error.message)
        }
  }  
  return (
    <div className='flex flex-col items-center justify-center mt-10 gap-5 bg-[#702eea] rounded-lg mx-[30%] px-5 py-5'>
        <InputField title="Full Name" val={name} set={setname}/>
        <InputField title="Designation" val={role} set={setrole}/>
        <InputField title="Department" val={department} set={setdepartment}/>
        <div className='text-center bg-white px-5 py-1 rounded-md cursor-pointer hover:bg-[#f0eeee] text-[#702eea] font-medium' onClick={handleAddClick}>Add</div>
        <ToastContainer/>
    </div>
  )
}

export default AddPage