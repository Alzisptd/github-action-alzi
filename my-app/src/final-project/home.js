import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
        .then((res)=>{
            let data = res.data
            console.log(data)
            let resultData = data.map((e) => {
                let {
                        _id,
                        name,
                        category,
                        description,
                        price,
                        rating,
                        release_year,
                        size,
                        is_android_app,
                        is_ios_app,
                        image_url,
                } = e

                    return {
                        _id,
                        name,
                        category,
                        description,
                        price,
                        rating,
                        release_year,
                        size,
                        is_android_app,
                        is_ios_app,
                        image_url,
                    };
            })
            setData(resultData)
        })
        .catch((err)=>{

        })

    },[])


  return (
    <section className="bg-gray-200 p-5">
            <div className="container mx-auto mt-10">
            <h1 className="text-xl font-bold">Find your data that you need!</h1>
            </div>
        
            
            <div className="container mx-auto flex flex-wrap gap-4">
            {data !== null &&
                data.map((res) => (
                <div
                    key={res._id} 
                    className="flex w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden"
                    style={{ height: "200px" }} 
                >
                    
                    <div className="w-1/3 h-full overflow-hidden">
                    <img
                        src={res.image_url}
                        alt={res.name}
                        className="w-full h-full object-cover"
                    />
                    </div>
        
                    
                    <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                        <h1 className="text-gray-900 font-bold text-lg">{res.name}</h1>
                        <small>{res.release_year}</small>
                        <p className="mt-2 text-gray-600 text-sm">
                        {res.description.length > 100
                            ? res.description.substring(0, 100) + "..."
                            : res.description}
                        </p>
                    </div>
                    <div>
                        <div className="text-gray-500">
                        <span>{res.category}</span> &middot; 
                        <span>{res.size >= 1024 ? (res.size / 1024).toFixed(1) + " GB" : res.size + " MB"}</span>{" "}
                        &middot;{" "}
                        <span>
                            {res.is_android_app && " Android"}{" "}
                            {res.is_ios_app && " iOS"}
                        </span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">
                            {res.price === 0 ? "Free" : `Rp ${res.price.toLocaleString("id-ID")}`}
                        </h1>
                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            {res.rating} Ratings
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
    </section>
  );
};

export default Home;