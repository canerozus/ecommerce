import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import BasketModal from './basketModal'

function Basket({ open, setOpen, basket, setBasket,onAdd, product, onRemove }) {

    return (
        <div className='flex relative mr-5 cursor-pointer' onClick={() => setOpen(true)}>
            <BasketModal open={open} setOpen={setOpen} basket={basket} setBasket={setBasket} onAdd={onAdd} product={product} onRemove={onRemove}/>
            <div className='flex justify-center items-center bg-orange-400 absolute rounded-full p-1 text-xs text-white bottom-4 left-4'>{basket.length}</div>
            <FaShoppingBasket fontSize={34} />

        </div>
    )
}

export default Basket