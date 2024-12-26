import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import { Table } from "flowbite-react"

const App = () => {
    
    const [data, setData] = useState(null)
    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)

    //indikator
    const [currentId, setCurrentId] = useState(-1)

    //Bikin Variable kosong untuk di Input
        const [input, setInput] = useState(
          {
            _id : "",
            name : "",
            category : "",
            description : "",
            price : "",
            rating : "",
            release_year : "",
            size : "",
            is_android_app : "",
            is_ios_app : "",
            image_url : "",
          }
      
        )

    
    useEffect(() => {
        
        axios.get("https://quiz-api-rho.vercel.app/api/mobile-apps")
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

    //handling submit
    const handleSubmit = (event) => {
        event.preventDefault()

        let {name} = input
        let {category} = input
        let {description} = input
        let {price} = input
        let {rating} = input
        let {release_year} = input
        let {size} = input
        let {is_android_app} = input
        let {is_ios_app} = input
        let {image_url} = input        

        // Kirimkan hanya mobileApps dalam payload
        const payload = {
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
        }

        if (currentId === -1) {

            //create data
            axios.post('https://quiz-api-rho.vercel.app/api/mobile-apps', payload)
            .then((res) => {
            console.log(res)
            setFetchStatus(true)
            })
        }else{
            //update data
            axios.put(`https://quiz-api-rho.vercel.app/api/mobile-apps/${currentId}`, payload)
            .then((res) => {
            console.log(res)
            setFetchStatus(true)
            })
        }

        //balikin indikator ke -1
        setCurrentId(-1)

        // Clear input setelah create data
        setInput({
            name: "",
            category: "",
            description: "",
            price: "",
            rating: "",
            release_year: "",
            size: "",
            is_android_app: "",
            is_ios_app: "",
            image_url: "",
        });
     }


     //Handle Input
     const handleInput = (event) => {
   
        let name = event.target.name
        let category = event.target.category
        let description = event.target.description
        let price = event.target.price
        let rating = event.target.rating
        let release_year = event.target.release_year
        let size = event.target.size
        let is_android_app = event.target.is_android_app
        let is_ios_app = event.target.is_ios_app
        let image_url = event.target.image_url
        let value = event.target.value
    
        if(name === "name"){
          setInput( {...input, name : value} )
        }else if(name === "category"){
          setInput( {...input, category : value} )
        }else if(name === "description"){
          setInput( {...input, description : value} )
        }else if(name === "price"){
        setInput( {...input, price : value} )
        }else if(name === "rating"){
        setInput( {...input, rating : value} )
        }else if(name === "release_year"){
        setInput( {...input, release_year : value} )
        }else if(name === "size"){
        setInput( {...input, size : value} )
        }else if(name === "is_android_app"){
        setInput( {...input, is_android_app : value} )
        }else if(name === "is_ios_app"){
        setInput( {...input, is_ios_app : value} )
        }else if(name === "image_url"){
        setInput( {...input, image_url : value} )
        }
  
        console.log(input)
      }

    console.log(data)

    //Untuk Hanlde Delete
    const handleDelete = (event) => {

      let idData = event.target.value

      axios.delete(`https://quiz-api-rho.vercel.app/api/mobile-apps/${idData}`)
      .then((res) => {
      setFetchStatus(true)
      })
    }

    //Handle Untuk Edit
    const handleEdit = (event) => {
        let idData = event.target.value
    
        setCurrentId(idData)
    
        axios.get(`https://quiz-api-rho.vercel.app/api/mobile-apps/${idData}`)
          .then((res) => {
            let data = res.data
    
            setInput(
              {
                name: data.name,
                description: data.description,
                category: data.category,
                release_year: data.release_year,
                size: data.size,
                price: data.price,
                rating: data.rating,
                image_url: data.image_url,
                is_android_app: data.is_android_app,
                is_ios_app: data.is_ios_app
              }
            )    
          })    
      }

    return(

        
    <div className="overflow-x-auto">

    <div className="p-4">
      {/* Tabel Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          {/* Header */}
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Nama</th>
              <th className="py-3 px-6 text-left">Kategori</th>
              <th className="py-3 px-6 text-center">Deskripsi</th>
              <th className="py-3 px-6 text-center">Price</th>
              <th className="py-3 px-6 text-center">Rating</th>
              <th className="py-3 px-6 text-center">Release Year</th>
              <th className="py-3 px-6 text-center">Size</th> 
              <th className="py-3 px-6 text-center">Android App</th>
              <th className="py-3 px-6 text-center">Ios App</th>             
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          
          {/* Body */}
          <tbody className="text-gray-600 text-sm font-light">
            {data !== null && data.map((res,index) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="py-3 px-6 text-left">{res.name}</td>
                <td className="py-3 px-6 text-left">{res.category}</td>
                <td className="py-3 px-6 text-left">
                {res.description.length > 30 ? res.description.substring(0, 30) + "..." : res.description}
                </td>
                <td className="py-3 px-6 text-left">{res.price}</td>
                <td className="py-3 px-6 text-left">{res.rating}</td>
                <td className="py-3 px-6 text-center">{res.release_year}</td>
                <td className="py-3 px-6 text-center">{res.size}</td>
                <td className="py-3 px-6 text-center">{res.is_android_app}</td>
                <td className="py-3 px-6 text-center">{res.is_ios_app}</td>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={handleDelete}
                    value={res._id}
                  >
                    Delete
                </button>
                <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={handleEdit}
                    value={res._id}
                  >
                    Edit
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form data */}
        <div className="w-full max-w-md bg-white shadow rounded p-6">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input Nama */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInput}
                        placeholder="Enter Name"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input Category */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={input.category}
                        onChange={handleInput}
                        placeholder="Enter Category"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input Description */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        value={input.description}
                        onChange={handleInput}
                        placeholder="Enter Description"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input Price */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={input.price}
                        onChange={handleInput}
                        placeholder="Enter Price"
                        required
                        min="0"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input Rating */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        value={input.rating}
                        onChange={handleInput}
                        placeholder="Enter Rating"
                        required
                        min="0"
                        max="5"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input Release Year */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Release Year</label>
                    <input
                        type="number"
                        name="release_year"
                        value={input.release_year}
                        onChange={handleInput}
                        placeholder="Enter Release Year"
                        required
                        min="1000"
                        max="9999"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input Size */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Size</label>
                    <input
                        type="number"
                        name="size"
                        value={input.size}
                        onChange={handleInput}
                        placeholder="Enter Size"
                        required
                        min="0"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input is_android_app */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Is Android App</label>
                    <input
                        type="number"
                        name="is_android_app"
                        value={input.is_android_app}
                        onChange={handleInput}
                        placeholder="0 or 1"
                        required
                        min="0"
                        max="1"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input is_ios_app */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Is iOS App</label>
                    <input
                        type="number"
                        name="is_ios_app"
                        value={input.is_ios_app}
                        onChange={handleInput}
                        placeholder="0 or 1"
                        required
                        min="0"
                        max="1"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Input Image URL */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Image URL</label>
                    <input
                        type="url"
                        name="image_url"
                        value={input.image_url}
                        onChange={handleInput}
                        placeholder="Enter Image URL"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
  
            {/* Tombol Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

    </div>    
    </div>

           
    )
}

export default App
