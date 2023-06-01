import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Homemiddle() {
    const [value,setvalue] = useState("")
    const [array,setarray] = useState([])
    const data ={
        userURl: value
    }
    const [shrturl,setshrturl] = useState([])
    const HandleSubmit=(e)=>{
        setarray(data)
        setvalue("")
        e.preventDefault()

    }
    useEffect(()=>{
        fetch(`https://api.shrtco.de/v2/shorten?url=${array.userURl}`)
        .then(res=>res.json())
        .then(dataa=>{
           let newurl = [...shrturl,dataa.result.full_short_link]
           setshrturl(newurl)
           console.log(shrturl)
        })
    },[array.userURl])
    
    return ( 
        <>
            <form onSubmit={HandleSubmit} action="submit">
                    <div id="bg-div" className="mt-24 flex flex-col relative top-10 gap-4 w-4/5 ml-10 p-5 sm:w-3/4 sm:h-28 rounded-xl sm:mt-6 sm:m-auto sm:flex sm:relative sm:top-10 sm:items-center sm:pl-[2em]  gap-20 sm:h-[5em] md:flex-row">
                        <input value={value} className="sm:w-3/4 p-2 rounded-xl" onChange={(e)=>{setvalue(e.target.value)}} type="text" placeholder="shorten a link here..."  required/>
                        <button type="submit" className="border-none hover:bg-cyan-300  transition ease-in-out delay-150 bg-sky-500/50  sm:w-1/4 p-1 rounded-xl text-white font-bold md:ml-20"  >shorten it</button>
                    
                    </div>
            </form>
            <div className="flex-col gap-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid grid-cols-5">
                {shrturl.map((item)=>{
                return <div className="w-72 m-auto mt-5 relative top-[4em] mb-12 rounded-xl p-4 bg-blue-300">
                                <li className="text-white">{item}</li>
                            </div>      
                })}
            </div>
            
        </>
        );
}

export default Homemiddle;