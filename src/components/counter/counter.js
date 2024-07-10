import { Button } from "bootstrap"
import react,{useState} from "react"


 export const Counter=()=>{
    const[current,a]=useState(0)
    const Update=()=>{
        a(current+1)
    }
    return(
        <>
        <button onClick={Update}>click </button>
        <p>{current}</p>
            </>
    )
}
