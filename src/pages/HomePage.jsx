import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const HomePage = () => {
  const [data,setdata] = useState();
  const navigate = useNavigate();
  

  const handleFetch = async () =>{
        try {
          const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees?offset=0&limit=50`,
          {
            method: 'GET',
            headers: {
              'projectId': '66ab6c2d7d024c0353da8862',
              'environmentId': '66ab6c2d7d024c0353da8863'
            },
            
          }
          );
          const val = await response.json();
          // console.log(val.data)
          setdata(val.data);
        } catch (error) {
          console.log(error);
        }
  }

  

  const handleEditClick = (id)=>{
        navigate(`/details/${id}`)
  }
 
  const handleDeleteClick = async (id)=>{
    try {
      const response = await fetch(
          `https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`,
          {
            method: 'DELETE',
            headers:{
                'projectId': '66ab6c2d7d024c0353da8862',
                'environmentId': '66ab6c2d7d024c0353da8863'
            },
            body: JSON.stringify({})
        }
      )

      if(response.status===200){
        handleFetch();
        
        toast.success('Record Deleted')
      }

    } catch (error) {
      toast.error(error.message)
    }
  }
  
  useEffect(()=>{
    handleFetch();
  },[])

  return (
    <div className='flex flex-col gap-5 my-5'>
        
        <div className='flex flex-row justify-around mx-5 text-[22px]'>
          <h1>SNo.</h1>
          <h1>Employee Name</h1>
          <h1>Designation</h1>
          <h1>Department</h1>
          <h1>Actions</h1>
        </div>
        <div className='flex flex-col mx-[45px] gap-5'>
            {
             data && data.length>0 ? data.map((info,id)=>(
              <div className='flex flex-row justify-between mx-5 px-4 py-3 text-[19px] hover:bg-[#dedcdc9e] hover:rounded-md'
               key={id}>
                <h1>{id+1}</h1>
                <h1>{info.name}</h1>
                <h1>{info.role}</h1>
                <h1>{info.department}</h1>
                <div className='flex flex-row gap-4 ml-5'>
                    <div className='cursor-pointer hover:underline' onClick={()=>handleEditClick(info._id)}>Edit</div>
                    <div className='cursor-pointer hover:underline' onClick={()=>handleDeleteClick(info._id)}>Delete</div>
                </div>
              </div>
             ))
             :
             (
               <div className='text-center text-[30px] text-[#d6cece]'>No Employees in the system</div>
             )
            }
            
            
        </div>
      <ToastContainer/>
    </div>
  )
}

export default HomePage