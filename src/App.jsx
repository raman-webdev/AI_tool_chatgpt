import React from 'react'

const App = () => {
  return (
    <>
      <div className='grid grid-cols-5 text-white text-center h-screen'> 
        {/* left-section */}
        <div className='col-span-1 py-10 bg-zinc-800'>
          <p>Hello</p>
        </div>

        {/* right-section */}
        <div className='col-span-4 p-10  '>
              <div className='container h-[550px] py-10'>
                your answer is here
              </div>
               <div className='bg-zinc-800-700 border-2 rounded-2xl border-zinc-700 h-16 w-[660px] m-auto  flex justify-between px-4'>
               <input 
              type="text" 
              placeholder='Ask here' 
              
              />
              <button>Ask</button>
               </div>

          <div>

          </div>
        </div>
      </div>  
    </>
  )
}

export default App
