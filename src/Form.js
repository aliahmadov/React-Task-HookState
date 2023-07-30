import React from 'react'
import "./Form.css"

export default function Form() {
  return (
    <div>
        <h1>Form</h1>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Model</label>
            <input type="text"></input>
        </section>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Vendor</label>
            <input type="text"></input>
        </section>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Price</label>
            <input type="number"></input>
        </section>
        <section style={{display:"flex",flexDirection:"column"}}>
            <label>Image Path</label>
            <input type="text"></input>
        </section>

        <section style={{display:"flex",marginTop:"30px"}}>
            <button className='btn green'>Add</button>
            <button className='btn orange'>Update</button>
        </section>
    </div>
  )
}
