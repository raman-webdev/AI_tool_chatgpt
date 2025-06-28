import React, { useState } from 'react'
import { URL } from './constant';

const App = () => {

  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("Your answer is here!")
  
 const payload = {
    "contents": [
    {
      "parts": [
        {
          "text": question
        }
      ]
    }
  ]
}
  const askQuestin = async () => {
    let response = await fetch (URL + "AIzaSyBAC8-Y_UgVjyi5SeaUW_jkje7Iafbhrfw",{
      method:"POST",
      body:JSON.stringify(payload)
    }) 
    response = await response.json();
    setResult(response.candidates[0].content.parts[0].text);
  }
  return (
    <>
      <div className='grid grid-cols-5 text-white text-center h-screen'> 
        {/* left-section */}
        <div className='col-span-1 py-10 bg-zinc-800'>
          <p>Hello</p>
        </div>

        {/* right-section */}
        <div className='col-span-4 p-10  '>
              <div className='container h-[550px] py-10 overflow-auto'>
              {result}
              </div>
               <div className='bg-zinc-800-700 border-2 rounded-2xl border-zinc-700  m-auto  flex justify-between px-4'>

               <input 
              type="text" 
              placeholder='Ask here'
              className='w-full h-full outline-none ' 
              onChange={(e) => setQuestion(e.target.value) }
              />
              <button onClick={askQuestin}>Ask</button>
               </div>

          <div>
           
          </div>
        </div>
      </div>  
    </>
  )
}

export default App
