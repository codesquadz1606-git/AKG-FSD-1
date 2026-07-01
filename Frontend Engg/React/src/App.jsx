import './App.css'
import First, { First1, First2, StateComponent } from './Class 1/First'
import Second, { FormHandlingManual, FormHandlingPackage, UseEffect } from './Class 2/Second';
import Routing, { ProductListing } from './Class 3/Third';

function App() {
  let name="Sanjay";
  let city="Gurgaon";

  let skills=["React","ES6","Node"]
  return (
    <>
      {/* <First />
      <First1/>
      <First2/> */}
      {/* <StateComponent/> */}
      
      {/* TO transfer data from App(parent) to Second(child) , we will share data as a attribute */}
      {/* <Second name={name} city={city} skill={skills}/> */}

      {/* <UseEffect/> */}
      {/* <FormHandlingManual/> */}
      {/* <FormHandlingPackage/> */}

      {/* <Routing/> */}
      <ProductListing/>
    </>
  )
}

export default App
