"use client"
import Link from "next/link"
import Navbar from "./navbar/page"
import Homepage from "./home/page"
import Footer from "./footer/page"




export default function Home(){
  return(
    <>
        <div>
<Navbar/>
</div>

<main>
  <Homepage/>
  <Footer/>
  
</main>
</>


    
    
  )
}