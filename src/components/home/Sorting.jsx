import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-600 my-10 p-3 rounded-xl flex items-center justify-end px-10'>
      <p className="text-white px-2 text-lg">Price:</p>
        <select onChange={e => setSort (e.target.value)} className='bg-gray-200 p-2 text-lg' name="" id="">
          <option disabled value="">Choose</option>
          <option value="inc">Low to High</option>
          <option value="dec">High to Low</option>
        </select>
    </div>
  )
}

export default Sorting