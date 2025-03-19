import { useState,useEffect } from "react"


export const Demo = () => {
    let [output,setOutput]= useState([]);

    useEffect(()=>{
    fetch("/Car-Rental/Test1.json")
    .then((copy)=>{
        return copy.json()
    })
    .then((data)=>{
        setOutput(data)
    })
    },[])
    console.log(output)
  return (
    <div>demo</div>
  )
}

