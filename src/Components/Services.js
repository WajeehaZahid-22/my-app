import React from 'react'
import Card from'../Components/Card'
import Card2 from "../Components/Card2"
import Card3 from '../Components/Card3'
import RegisterForm from '../Components/RegisterForm'
function Services() {
  return (
    <>
   
     <div className="text-center my-8">
  <h1 className="text-4xl font-bold text-gray-800 mb-4">Services</h1>
  <p className="text-gray-600 text-lg mx-auto max-w-2xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, totam! Quaerat, voluptatem, doloribus recusandae corrupti id eaque, eligendi deserunt tempora dolor tenetur dicta expedita maiores. Hic voluptatibus iste qui incidunt.
  </p>
</div>
<Card/>
<RegisterForm/>
<Card2/>
<Card3/>
</>

  )
}

export default Services
