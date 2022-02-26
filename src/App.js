import React,{ useState } from "react"
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js'


function App()
{
let[m,setm]=useState("Enter the values first")

const convert=(val,unit1,unit2)=>{
  if(unit1=="Celsius" && unit2=="Fahrenheit"){
    val=Number(val)
    val=val*1.8
    val=val+32
    
  }
  else if(unit1=="Fahrenheit" && unit2=="Celsius"){
    val=Number(val)
    val=val-32
    val=val/1.8
  }
  else if(unit1=="Celsius" && unit2=="Kelvin"){
    val=Number(val)
    val=val+273.15
  }
  else if(unit1=="kelvin" && unit2=="Celsius"){
    val=Number(val)
    val=val-273.15
  }
  else if(unit1=="Fahrenheit" && "unit2==Kelvin"){
    val=Number(val)
    val=val+459.67
    val=val/1.8
  }
  else if(unit1=="Kelvin" && unit2=="Fahrenheit"){
    val=Number(val)
    val=val*1.8
    val=val-459.67
  }
  
  console.log(val)
  setm(val)
}
  return(
    <>
    <Form convert={convert} m={m} />
    
    </>


  );
}
export default App
