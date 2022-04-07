import React, { useEffect, useState } from 'react'
import Data from '../products-list.json'

function SideBar({ setFilter, product,filter }) {
    const [category, setCategory] = useState([]);

    const handleFilter = (e, categoryName) => {
        setFilter(categoryName)
    }
    const clearFilter = () =>{
            setFilter(null)
    }
    useEffect(() => {
        setCategory([...new Set(Data.map(item => item.category))])
    }, [])
    return (
        <div className='flex-col items-center justify-start lg:w-1/6 hidden lg:flex  lg:h-[50rem] lg:border-slate-400 lg:border-2 lg:m-2 lg:p-4'>
            <button onClick={() =>clearFilter()} className=' rounded m-1 bg-slate-400 text-white hover:bg-slate-600 p-1'>Clear Filter</button>
            {category.map((item, index) => {
                return (
                    
                    <p onClick={e => handleFilter(e, item)} className='text-xl text-center m-2 bg-orange-400 text-white p-2 rounded cursor-pointer lg:w-44 ' key={index}>{item}</p>
                )
            })}
        </div>
    )
}

export default SideBar