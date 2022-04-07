import React, { useEffect, useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Slider from "react-slick";
import Data from '../products-list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (

        <GrNext
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick} />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (

        <GrPrevious
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick} />
    );
}
function Product({ product, setProduct, filter, onAdd, search }) {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setProduct(Data)
        setLoading(false)
    }, [Data])


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className=' flex flex-col :h-full w-full p-10'>

            {loading ? <h1>loading...</h1> : <Slider className=' flex flex-row h-full items-center justify-center '{...settings}>
                {filter ? product.filter(item2 => item2.category === filter).map((item) => {
                    return (
                        <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg justify-center h-[600px] items-center m-10">
                            <div className='flex w-full justify-center items-center'>
                                <img className=" h-72  " src={item.image} />
                            </div>
                            <h1 className="font-bold text-xl mb-2 px-6 py-4 text-center">{item.title}</h1>

                            <div className="flex flex-col items-center justify-centerpx-6 pt-3 pb-3">
                                <p>{parseFloat(item.price)}$</p>
                                <button className='flex bg-orange-400 rounded p-2 mt-2 hover:bg-orange-500 ease-in text-white' onClick={(e) => onAdd(e, item)} >Add to Card</button>
                            </div>
                        </div>
                    )
                }) : (search ? product.filter(item2 => item2.title.toLowerCase().includes(search)).map((item) => {
                    return (
                        <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg justify-center h-[600px] items-center m-10">
                            <div className='flex w-full justify-center items-center'>
                                <img className=" h-72  " src={item.image} />
                            </div>
                            <h1 className="font-bold text-xl mb-2 px-6 py-4 text-center">{item.title}</h1>

                            <div className="flex flex-col items-center justify-centerpx-6 pt-3 pb-3">
                                <p>{parseFloat(item.price)}$</p>
                                <button className='flex bg-orange-400 rounded p-2 mt-2 hover:bg-orange-500 ease-in text-white' onClick={(e) => onAdd(e, item)} >Add to Card</button>
                            </div>
                        </div>
                    )
                }) : product.map((item) => {
                    return (
                        <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg justify-center h-[600px] items-center m-10">
                            <div className='flex w-full justify-center items-center'>
                                <img className=" h-72  " src={item.image} />
                            </div>
                            <h1 className="font-bold text-xl mb-2 px-6 py-4 text-center">{item.title}</h1>

                            <div className="flex flex-col items-center justify-centerpx-6 pt-3 pb-3">
                                <p>{parseFloat(item.price)}$</p>
                                <button className='flex bg-orange-400 rounded p-2 mt-2 hover:bg-orange-500 ease-in text-white' onClick={(e) => onAdd(e, item)}>Add to Card</button>
                            </div>
                        </div>
                    )
                }))}


            </Slider>}
        </div>



    )
}

export default Product