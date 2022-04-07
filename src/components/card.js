import React from 'react'
import Product from './product'

function Card({product,setProduct,filter}) {
    return (
        <div className=' flex flex-col w-full h-full lg:w-5/6 lg:h-[50rem] lg:border-slate-400 lg:border-2 lg:m-2 items-start justify-center '>
            <h1 className=' flex w-full h-20 text-center items-center justify-center text-xl cursor-default'>Recommended for you</h1>
            <Product product={product} setProduct={setProduct} filter={filter}/>
        </div>
    )
}

export default Card