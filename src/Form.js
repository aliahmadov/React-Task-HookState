import React from 'react'
import "./Form.css"

export default function Form({handleAddBtn,handleInputChange,car,handleUpdate}) {
  return (
    <div>
        <h1 style={{fontSize:"50px"}}>Form</h1>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Model</label>
            <input onChange={handleInputChange} name="model" type="text" value={car.model}></input>
        </section>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Vendor</label>
            <input onChange={handleInputChange} name="vendor" type="text" value={car.vendor}></input>
        </section>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Price</label>
            <input onChange={handleInputChange} name="price" type="number" value={car.price}></input>
        </section>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Image Path</label>
            <input onChange={handleInputChange} name="imageUrl" type="text" value={car.imageUrl} ></input>
        </section>

        <section style={{display:"flex",marginTop:"30px"}}>
            <button onClick={handleAddBtn} className='btn green'>Add</button>
            <button onClick={handleUpdate} className='btn orange'>Update</button>
        </section>
    </div>
  )
}
