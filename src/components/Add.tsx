import React, { useRef } from 'react'
import { useAppDispatch } from '../store/store'
import { addPerson } from '../store/features/personSlice'


const Add = () => {
    const name = useRef<string>("")
    const dispatch = useAppDispatch()
    console.log(name);
    
  return (
    <form className='border rounded-md p-2 shadow-md m-2'>
        <label htmlFor="person">Person Name:</label>
        <input type="text" name="person" id="person" className='border rounded-md p-2 mx-2'
        onChange={(e)=>(name.current = e.target.value)}
        />
        <button type="button" className='bg-violet-500 text-white rounded-md px-4 
        py-2 cursor-pointer hover:bg-violet-600 active: bg-violet-700'
        onClick={()=>dispatch(addPerson({name:name.current}))}
        >
          Add
         </button>
    </form>
  )
}

export default Add