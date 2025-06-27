import React from 'react'

const App = () => {
  return (
    <>
      <div className='grid grid-cols-5 h-screen text-center text-white'>
        
        {/* Sidebar */}
        <div className='col-span-1 bg-zinc-800'>
          hello
        </div>

        {/* Main Content */}
        <div className='col-span-4 flex flex-col justify-center items-center bg-gray-900'>

          {/* Upper Section */}
          <div className='h-[550px] w-full flex items-center justify-center'>
            {/* Your centered content here */}
            <p>Centered Content</p>
          </div>

          {/* Input Section */}
          <div className='w-full bg-fuchsia-400 flex justify-center items-center gap-2 p-4'> 
            <input
              type="text"
              placeholder='Ask Here'
              className='p-2 rounded text-black'
            />
            <button className='bg-black text-white px-4 py-2 rounded'>Ask</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
