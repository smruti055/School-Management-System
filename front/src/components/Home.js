import React from 'react'

const Home = () => {
  return (
    <section className="bg-black">
        <div className="px-6 mx-auto h-screen pt-6">
            <nav className='flex justify-between'>
                <a href='/home' className='text-xl font-bold md:text-2xl text-white border-2 p-2 rounded '>logo</a>
                <a href='/' className=' text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-4 px-3 text-center'>LOGOUT</a>
            </nav>
            <div className='h-max flex justify-center mt-40'>
                <div>
                    <h1 className='text-7xl font-bold text-blue-200'>CHOOSE A ROLE</h1>
                    <div className='flex justify-center mt-4'>
                        <a href='/teachers' className=' text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none cdfocus:ring-primary-300 font-medium px-10 py-6 text-center text-lg mr-3'>TEACHER</a>
                        <a href='/students' className=' text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  px-10 py-6 text-center text-lg ml-3'>STUDENT</a>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home