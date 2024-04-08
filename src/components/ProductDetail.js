import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../navbar';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate  = useNavigate();
    const [recipes, setrecipes] = useState([]);

    const { id } = useParams();

    const fetchData = async () => {
        try {

            const resp = await axios.get(`https://dummyjson.com/recipes/${id}`);
            setrecipes([resp.data]);
        } catch (error) {
            console.log(error)
        }
    }

    const handleButEvent = (item) => {
        alert("hello buy");
        console.log("hi...", item)
    }
    const handleCartEvent = (item) => {
        if(item){
            const storedCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
            storedCartItems.push(item);
            console.log(storedCartItems)
            localStorage.setItem("cartItem", JSON.stringify(storedCartItems));
            setTimeout(()=>{
                navigate ("/")
            }, 1000)
           
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <NavBar />
            <div className='grid grid-cols-12 pl-28  bg-slate-50 pb-[132px] mt-24'>
                {recipes.map((item, index) => (
                    <>
                        <div className='col-span-4 mb-3 shadow-lg' key={index}>
                            <img className="w-full p-4 pt-12 rounded" src={item.image} alt="Sunset in the mountains" />

                        </div>
                        <div className='col-span-4 '>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2" >{item.name}</div>
                                <p ><span className=" text-sm font-bold">Ratings:</span> {item.rating}</p>
                                <h2 className='text-lg font-bold'>Ingredients:</h2>
                                {
                                    item.ingredients.map((item, index) => (
                                        <ul key={index} className='pl-4'>
                                            <li>{index+1}. {item}</li>
                                        </ul>
                                    ))
                                }
                                <h2 className='text-lg font-bold'>Instructions:</h2>
                                {
                                    item.instructions.map((item, index) => (
                                        <ul key={index} className='pl-4'>
                                            <li>{index+1}. {item}</li>
                                        </ul>
                                    ))
                                }
                             
                            </div>
                            <div className=" flex justify-between px-6 pt-4 pb-2">
                                <button onClick={() => handleButEvent(item)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Buy
                                </button>
                                <button onClick={() => handleCartEvent(item)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded">
                                     Add To Cart
                                </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default ProductDetail