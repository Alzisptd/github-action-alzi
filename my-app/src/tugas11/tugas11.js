import React from "react"
import { useState } from "react"
import '../App.css'
import { useEffect } from "react"
import axios from 'axios'
import { Table } from "flowbite-react"

const App = () => {

    //materi fetching data
    const [data, setData] = useState(null)

    //materi create data & handling input
    const [input, setInput] = useState(
      {
        name : "",
        course : "",
        score : ""
      }
  
    )

    

    //indikator
   const [fetchStatus, setFetchStatus] = useState(true)
  
    useEffect(() => {

      //fetch data dengan kondisi
        if (fetchStatus === true) {
      axios.get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })
      setFetchStatus(false)
        }

        }, [fetchStatus, setFetchStatus])
        

        const handleInput = (event) => {
   
      let name = event.target.name
      let course = event.target.course
      let score = event.target.score
      let value = event.target.value
  
      if(name === "name"){
        setInput( {...input, name : value} )
      }else if(name === "course"){
        setInput( {...input, course : value} )
      }else if(name === "score"){
        setInput( {...input, score : value} )
      }

      console.log(input)
    }

      //handling submit
        const handleSubmit = (event) => {
        event.preventDefault()

        let {name} = input
        let {course} = input
        let {score} = input

        //create data
        axios.post('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score', { name,course,score })
        .then((res) => {
        console.log(res)
        setFetchStatus(true)
        })

        //clear input setelah create data
        setInput(
            {
                name: ""
            }
        )
    }

    console.log(data)

        const handleDelete = (event) => {

            let idData = parseInt(event.target.value)

            axios.delete(`https://6678f9f40bd45250562081d9.mockapi.io/api/student-score/${idData}`)
            .then((res) => {
            setFetchStatus(true)
            })

    }


    return(

        
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
  
        {/* Form data */}
        <div className="w-full max-w-md bg-white shadow rounded p-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Add New Student</h1>
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
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
  
            {/* Input Mata Kuliah */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Course</label>
              <input
                type="text"
                name="course"
                value={input.course}
                onChange={handleInput}
                placeholder="Enter Course"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
  
            {/* Input Nilai */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Score</label>
              <input
                type="text"
                name="score"
                value={input.score}
                onChange={handleInput}
                placeholder="Enter Score"
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

           
    )
}

export default App
