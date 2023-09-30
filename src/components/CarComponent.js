import React from 'react'

export default function CarComponent({car}) {
  return (
     <div className=' bg-slate-100 shadow-xl rounded-lg p-10 '>
          <h3>Car Name : {car.name}</h3>
          <p>Price : ${car.price}</p>
    </div>
  )
}
