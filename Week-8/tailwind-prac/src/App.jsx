import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './Components/RevenueCard'

function App() {

  return (
    <>
      {/* <div className='flex'>
          <div className='bg-red-500'>hi</div>
          <div className='bg-green-500'>hi</div>
          <div className='bg-yellow-500'>hi</div>
        </div>

        <div className='grid grid-cols-3'>
          <div className='bg-red-500'>hi</div>
          <div className='bg-green-500'>hi</div>
          <div className='bg-yellow-500'>hi</div>
        </div>

        <div className='grid grid-cols-10'>
          <div className='bg-red-500 col-span-4'>hi</div>
          <div className='bg-green-500 col-span-4'>hi</div>
          <div className='bg-yellow-500 col-span-2'>hi</div>
        </div> */}

      {/* <div className='bg-red-500 md:bg-blue-500'>
          hi there
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='bg-red-500'>hi there</div>
          <div className='bg-yellow-500'>hi there</div>
          <div className='bg-green-500'>hi there</div>
        </div> */}
      <div className='grid grid-cols-4'>
        <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
      </div>
    </>
  )
}

export default App
