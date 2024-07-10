import { Component } from "react"

class Circle extends Component{
    render() {
        return(
         <>
            <div style={{border:"1px solid black", height:"100vh", width:"100vw"}}>
            <button style={{marginTop:"20px", marginLeft:"20px"}}>Click to add circles</button>
            <div style={{border:"2px solid black", height:"30px", width:"30px", borderRadius:"100px", marginLeft:"20px", marginTop:"30px"}}></div>
            </div>
         </>
        )
    }
}
export default Circle