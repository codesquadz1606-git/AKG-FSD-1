import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Navbar from './Navbar'
import WebApplication from './Children/WA'
import DigitalMarketing from './Children/DM'
import DevopsEngg from './Children/DE'
import UserDetail from './Pages/UserDetail'
import { useEffect, useState } from 'react'

export default function Routing(){
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/about" element={<About/>} >
                        <Route path='wa' element={<WebApplication/>} />
                        <Route path='dm' element={<DigitalMarketing/>} />
                        <Route path='de' element={<DevopsEngg/>} />
                    </Route>
                    <Route path='/users/:id' element={<UserDetail/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export function ProductListing(){
    let PAGE_SIZE=33;
    let [hotel,setHotels]=useState([])
    let [total,setTotal]=useState(0);
    let [current,setCurrent]=useState(0);
    let url=`https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${current*PAGE_SIZE}`
    async function dataFetch(){
        let res=await fetch(url)
        let hotelData=await res.json()
        // console.log(hotelData)

        setTotal(hotelData.count) // 500
        setHotels(hotelData.data)
    }

    useEffect(()=>{
        dataFetch();
    },[current]) // with dependency

    console.log(hotel)

    let noOfPages=Math.ceil(total/PAGE_SIZE)
    console.log(noOfPages); // 16

    let start=current*PAGE_SIZE; // 0 33
    let end=start+PAGE_SIZE; // 33  66

    return(
        <>
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
                {
                    hotel.map((el)=>(
                        <Hotels name={el.name} thumbnail={el.thumbnail} price={el.price} rating={el.rating} location={el.location} des={el.description}/>
                    ))
                }
            </div>

            <div>
                {
                    Array(noOfPages).keys().map((el)=>(
                        <button onClick={()=>{setCurrent(el)}}>{el+1}</button>
                    ))
                }
            </div>
        </>
    )
}

export function Hotels({name,location,thumbnail,price,rating,des}){
    return(
        <div style={{display:"flex",gap:"20px",border:"2px solid white",padding:"10px 15px",borderRadius:"30px"}}>
            <div>
                <img width="300px" height="250px" src={thumbnail} alt="" />
            </div>
            <div style={{display:"flex",flexDirection:"column",textAlign:"left",gap:"20px"}}>
                <h2>{name}</h2>
                <p>{des.slice(0,200)}...</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Location : {location}</p>
                    <p>Rating : {rating}</p>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Price : {price}</p>
                    <button>Move to Wishlist</button>
                </div>
            </div>
        </div>
    )
}