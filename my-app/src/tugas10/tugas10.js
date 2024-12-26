import React from "react"
import { useState } from "react"
import '../App.css'
import { useEffect } from "react"
import axios from 'axios'
import { Table } from "flowbite-react"

const App = () => {
    
    const [data, setData] = useState(null)
    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)

    
    useEffect(() => {
        
        axios.get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
        .then((res)=>{
            let data = res.data
            console.log(data)
            let resultData = data.map((e) => {
                let {
                    gender,
                        height,
                        id,
                        name,
                        course,
                        score,
                } = e

                let index;
                    if (score >= 80) {
                        index = "A";
                    } else if (score >= 70 && score < 80) {
                        index = "B";
                    } else if (score >= 60 && score < 70) {
                        index = "C";
                    } else if (score >= 50 && score < 60) {
                        index = "D";
                    } else {
                        index = "E";
                    }
                
                    return {
                        id,
                        name,
                        course,
                        score,
                        index, 
                    };
            })
            setData(resultData)
        })
        .catch((err)=>{

        })

    },[])

    console.log(data)

    const handleDelete = (event) => {

      let idData = parseInt(event.target.value)

      axios.delete(`https://6678f9f40bd45250562081d9.mockapi.io/api/student-score/${idData}`)
      .then((res) => {
      setFetchStatus(true)
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
              <th className="py-3 px-6 text-left">Mata Kuliah</th>
              <th className="py-3 px-6 text-center">Nilai</th>
              <th className="py-3 px-6 text-center">Index</th>
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
                <td className="py-3 px-6 text-left">{res.course}</td>
                <td className="py-3 px-6 text-center">{res.score}</td>
                <td className="py-3 px-6 text-center">{res.index}</td>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={handleDelete}
                    value={res.id}
                  >
                    Delete
                  </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>    
    </div>

           
    )
}

export default App
