import React from 'react'
import { Dialog } from '@headlessui/react'
function BasketModal({ open, setOpen, basket, onAdd, product, onRemove }) {
    
    const closeModal = () => {
        setOpen(false)
    }
    
    const totalPrice = basket.reduce((acc, x) => acc + x.price * x.qty, 0);
    return (
        <>

            <Dialog as='div' open={open} onClose={closeModal} className='fixed z-10 inset-0 overflow-y-auto bg-opacity-0 bg-black  '>
                <div className="flex items-center justify-center min-h-screen bg-opacity-80 ">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 " />

                    <div className="relative bg-white rounded  w-full h-full sm:w-auto mx-auto ">
                        <div className='flex justify-center items-center '>
                            <Dialog.Title as='h3' className='flex justify-center items-center absolute text-lg text-black font-bold cursor-default'>Basket</Dialog.Title>

                            <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto m-2 cursor-pointer hover:color-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className='flex  flex-col p-10 justify-center items-center'>
                            {basket.length === 0 && <h1>Basket is Empty</h1>}
                            {basket.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-row gap-2 w-full'>
                                        <div className='flex items-center justify-center w-1/4'>
                                        <img src={item.image} className='w-12 h-12' />
                                        </div>
                                        <div className='flex flex-col items-center justify-center w-3/4 gap-3'>
                                            <div className='flex justify-start w-full text-left'>{item.title}</div>
                                            <div className='flex flex-row gap-1 items-center w-full justify-between '>
                                                <div className='flex items-center justify-center '>
                                                <button className='bg-orange-400 text-white p-1 rounded w-5 h-8'onClick={(e) => onAdd(e,item)}>+</button>
                                                <span className='m-1'>{item.qty}</span>
                                                <button className='bg-orange-400 text-white p-1 rounded w-5 h-8 ' onClick={(e) => onRemove(e,item)}>-</button>
                                                </div>
                                                <p>{(item.qty * item.price).toFixed(2)}$</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                                
                            })}
                            {basket.length >0 && <p className='mt-2'>Total Price : {totalPrice.toFixed(2)}</p>}
                            <div className='flex flex-row items-center justify-center pt-5'>
                                <button
                                    className="inline-flex justify-center px-4 py-2 m-5 text-sm font-medium text-white bg-slate-400 border border-transparent rounded-md hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={closeModal}>Cancel</button>
                                <button
                                    className="inline-flex justify-center px-4 py-2 m-5 text-sm font-medium text-white bg-slate-400 border-transparent rounded-md hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={closeModal}>Payment</button>


                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default BasketModal