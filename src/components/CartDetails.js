import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../navbar';

const CartDetails = () => {
    const [cartRecords, setCartRecords] = useState([]);

    useEffect(() => {
        const getLocalData = JSON.parse(localStorage.getItem('cartItem'));
        if (getLocalData) {
            setCartRecords(getLocalData)
        }
    }, [])
    return (
        <div>
            <NavBar />
            <div className='grid grid-cols-12 pl-28  bg-slate-50 pb-[132px] mt-24'>
                {cartRecords.map((item, index) => (
                    <>
                        <div className='col-span-2 mb-3 shadow-lg flex justify-center items-center' key={index}>
                            <img className="w-full p-4 pt-12 rounded" src={item.image} alt="Sunset in the mountains" />

                        </div>
                        <div className='col-span-4 '>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2" >{item.name}</div>
                                <p ><span className=" text-sm font-bold">Ratings:</span> {item.rating}</p>
                            

                            </div>

                        </div>
                        <div className='col-span-6 '></div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default CartDetails