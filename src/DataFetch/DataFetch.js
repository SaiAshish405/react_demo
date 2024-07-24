import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const DataFetch=()=>{
    const[userData,setUserData]=useState([])
    const[filterData,setFilterData]=useState([])
    const reef=useRef()
    useEffect(()=>{
        FetchData()
        reef.current.focus()
    },[])
   const FetchData=async()=>{
const res= await axios.get("https://fakestoreapi.com/products")
try{
    if(res.status===200){
        console.log(res)
        setUserData(res.data)
    }
}
catch{
    console.log("Some thing went wrong...");
}

    }
    const ChangeHandler=()=>{
        console.log(reef.current.value);    
        setFilterData(userData.filter(each=>each.category.includes(reef.current.value)))
    }

    return(
        <>
        <input type="text" ref={reef} onChange={ChangeHandler}/>
        <div>
        { 
             filterData.map((data)=>{
               return (
                <div key={data.id} className="card">
                    <p >Title :{data.title}</p>
                    <img src={data.image} height={100} width={100}/>
                    <p >Price :{data.price}</p>
                </div>
               )
            })
     }

        </div>
        </>
    )
}
export default DataFetch