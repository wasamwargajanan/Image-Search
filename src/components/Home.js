import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../navbar';
import { Link } from 'react-router-dom';


const limit = 5;

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [total, setTotal] = useState(0); // Corrected typo here

    const fetchData = () => {
        axios.get(`https://dummyjson.com/recipes?page=${currentPage}&limit=${limit}`)
            .then(response => {
                const { data } = response;
                if (data && data.recipes.length > 0) {
                    setRecipes(prevRecipes => [...prevRecipes, ...data.recipes]);
                    setCurrentPage(currentPage + 1);
                    setTotal(data.total); // Corrected typo here
                    console.log("total", data.total);
                    setHasMore(recipes.length < data.total);
                } else {
                    setHasMore(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <div className='grid grid-cols-12 gap-4 mx-10 mt-24'>
                {recipes.map((item, index) => (
                    <div className='col-span-3 mb-3 flex justify-center items-center' key={index}>
                        <Link to={`/product-detail/${item.id}`}>
                            <div className="w-[18rem] rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={item.image} alt="Recipe" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item.name}</div>
                                    <p className="text-gray-700 text-base">Description...</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
