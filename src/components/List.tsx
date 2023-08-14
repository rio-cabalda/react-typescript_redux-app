import React from 'react'
import { useAppSelector } from '../store/store'

const List = () => {
    const persons = useAppSelector(state=>state.person.persons)

  return (
    <article className='rounded-md shadow border m-2 p-2'>
        <div>Person List</div>
        <table className='rounded-md'>
            <thead>
                <tr className='bg-gradient-to-b from-sky-400 to-sky-600 text-white'> 
                    <th className='p-2 border rounded'>ID</th>
                    <th className='p-2 border rounded'>Person</th>
                </tr>
            </thead>
            <tbody>
                {persons?.map((person)=>(
                    <tr className='even:bg-slate-50' key={person.id}>
                        <td className='p-2'>{person.id}</td>
                        <td className='p-2'>{person.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </article>
  )
}

export default List