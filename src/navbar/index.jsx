import React, { useEffect, useState } from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    const [openPop, setOpenPop] = useState(false);
    const [cartRecords, setCartRecords] = useState([]);

    useEffect(() => {
        const lclData = JSON.parse(localStorage.getItem('cartItem'));
        if (lclData) {
            setCartRecords(lclData);

        }
        console.log("local data", lclData);
    }, [])

    const openPopup = () => {
        setOpenPop(true);
    }
    const closePop = () => {
        setOpenPop(false);
    }

    const openCartComp = () => {
        setTimeout(() => {
            navigate("/cart-details")
        }, 1000);
    }

    const homePage = () => {
        navigate('/')
    }
    return (
        <>
            {openPop && (
                <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 pl-96 pt-24 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Sign in
                                </h3>
                                <button onClick={closePop} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div class="w-full max-w-xs mx-auto">
                                <form class=" rounded px-8 pt-6 pb-8 mb-4">
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                            Username
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                    </div>
                                    <div class="mb-6">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                            Password
                                        </label>
                                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                        <p class="text-red-500 text-xs italic">Please enter a password.</p>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Sign In
                                        </button>
                                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            )}

            <nav className=" fixed top-0 left-0 w-full bg-teal-500 p-6 flex justify-between pl-28 pr-16">
                <div className="flex items-center flex-shrink-0 text-white mr-6" onClick={homePage}>
                    <span className="font-semibold text-xl cursor-pointer">Foodies</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block lg:flex lg:items-center lg:w-auto">
                    <div className='text-white'>
                        <span className='pl-1 cursor-pointer' onClick={openPopup}>Login</span> /
                        <span className='pl-1 cursor-pointer' onClick={openPopup}>Sign up</span>

                    </div>
                    <div className='pl-2 text-white cartDivElement cursor-pointer' onClick={openCartComp}>
                        <span >
                            <i className="fa-solid fa-cart-shopping "></i>
                        </span>
                        <span className='cartLength'>
                            {cartRecords.length}
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
