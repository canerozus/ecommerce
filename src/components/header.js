import React from 'react'
import Basket from './basket'
import SearchBar from './searchBar'

function Header({product, setProduct}) {
    return (
        <div className='flex flex-row items-center justify-between m-2 h-20 border-slate-400 border-2 rounded shadow-md'>
           <SearchBar product={product} setProduct={setProduct}/>
           <Basket />
        </div>
    )
}

export default Header