import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipesTable from './recipesTable'


export default function RecipeListing() {

  const [data, setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

 const fetchData=async()=>{
const response= await axios.get("https://dummyjson.com/recipes")
if(response===200){
    const recipeList=response.data.recipes
    setData(recipeList)
}
 }
  return (
    <div>
     {data.length>0?<RecipesTable data={data}/>:<></>}
    </div>
  )
}
