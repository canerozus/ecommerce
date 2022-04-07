import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
function Basket() {
    return (
        <div className='flex relative mr-5 cursor-pointer'>
            <div className='flex justify-center items-center bg-orange-400 absolute rounded-full p-1 text-xs text-white bottom-4 left-4'>95</div>
            <FaShoppingBasket fontSize={34}  />
        </div>
    )
}

export default Basket