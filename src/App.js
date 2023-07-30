import './App.css';
import Form from "./Form"
import {cars} from "./Data"

let uniqueID=0;
function App() {

  return (
    <div style={{display:"flex"}}>
      <div style={{flexBasis:"50%",border:"1px solid black",padding:"40px",height:"100vh"}}>
        <Form></Form>
      </div>

      <div style={{flexBasis:"50%",border:"1px solid black"}}>
          {
            cars.map((c)=>(
              <div
              key={uniqueID++}
              className="prodCard"
            >
              <div>
                <img
                  style={{ width: "450px", height: "450px" }}
                  src={c.imageUrl}
                  alt="product"
                ></img>
                <p>{c.vendor} : {c.model}</p>
                <p style={{ fontWeight: "bold" }}>{c.price} $</p>
              </div>
            </div>
            ))
          }
      </div>
    </div>
  );
}

export default App;
