import './App.css';
import Form from "./Form"
import {cars} from "./Data"
import {useState} from "react"

let uniqueID=0;
let carId=2;

function App() {

  const [carsData,setCars]=useState(cars);
  const [priceOrderState,setPriceOrderState]=useState("High to Low");
  const [letterOrderState,setLetterOrderState]=useState("Z to A");

  let [isHighToLow,setIsHighToLow]=useState(false);
  let [isAtoZ,setIsAtoZ]=useState(true);

  
  const [car,setCar]=useState({
    id:0,
    vendor:"",
    model:"",
    price:"",
    imageUrl:""
  });
  function handleAddBtn()
  {
    car.id=++carId;
    setCars([...cars,car]);

    setCar({
      id:0,
      model:"",
      vendor:"",
      price:0,
      imageUrl:""
    });
  }

  function handleUpdate()
  {
    let index=cars.findIndex(c=>c.id===car.id);

    const updatedCars=[...cars];
    updatedCars[index]=car;

    setCars(updatedCars);
    setCar({
      id:0,
      model:"",
      vendor:"",
      price:0,
      imageUrl:""
    });
  }

  function handleCardClick(car)
  {
      setCar({
        id:car.id,
        model:car.model,
        vendor:car.vendor,
        price:car.price,
        imageUrl:car.imageUrl
      });
      
  }

  function handleInputChange(event)
  {
    setCar((c)=>({
      ...c,
      [event.target.name]:event.target.value
    }));
  }

  function handleHighToLow()
  {
      let orderedCars=[...cars];
      isHighToLow=!isHighToLow;
      setIsHighToLow(isHighToLow);
      if(isHighToLow){
        orderedCars.sort((c1,c2)=>c2.price-c1.price);
        setPriceOrderState("Low To High");
        
      }
      else{
        orderedCars.sort((c1,c2)=>c1.price-c2.price);
        setPriceOrderState("High To Low");
      }
      setCars(orderedCars);
  }

  function handleAtoZ(){
    let orderedCars=[...cars];
    isAtoZ=!isAtoZ;
    setIsAtoZ(isAtoZ);

    if(isAtoZ){
      orderedCars.sort((c1,c2)=>c1.vendor.localeCompare(c2.vendor));
      setLetterOrderState("Z to A");
    }
    else{
      orderedCars.sort((c1,c2)=>c2.vendor.localeCompare(c1.vendor));
      setLetterOrderState("A to Z");
    }

    console.log(orderedCars);
    setCars(orderedCars); 

  }
  return (
    <div style={{display:"flex"}}>
      <div style={{flexBasis:"30%",borderRight:"3px dashed black",padding:"40px",height:"100vh"}}>
        <Form handleAddBtn={handleAddBtn} handleInputChange={handleInputChange} car={car}
        handleUpdate={handleUpdate}></Form>
      </div>

      <div style={{flexBasis:"70%",overflow:"auto",height:"100vh",padding:"30px"}}>
        <div style={{display:"flex",padding:"40px"}}>
          <button onClick={handleAtoZ} className='formBtn'>{letterOrderState}</button>
          <button onClick={handleHighToLow} className='formBtn'>{priceOrderState}</button>
        </div>
          {
            carsData.map((c)=>(
              <div
              key={uniqueID++}
              className="prodCard"
              onClick={()=>handleCardClick(c)}
            >
              <div>
                <img
                  style={{ width: "100%", height: "450px",borderRadius:"10px 10px 0px 0px" }}
                  src={c.imageUrl}
                  alt="product"
                ></img>
                <p style={{fontSize:"45px"}} className='model'>{c.vendor} : {c.model}</p>
                <p style={{fontWeight:"bold",fontStyle:"italic"}} className='model'>{c.price} $</p>
              </div>
            </div>
            ))
          }
      </div>
    </div>
  );
}

export default App;
