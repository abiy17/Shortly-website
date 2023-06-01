import { useState } from "react";
import { Link } from "react-router-dom";
function HomeNav() {
    const [toggle,settoggle] = useState(true)
    return (
        <div className='flex gap-10 w-full lg:flex md:gap-10 sm:gap-0 justify-around items-center h-24'>
            <div className="flex ">
                <h1 className="text-3xl font-bold mr-14">Shortly</h1>
                <ul className={toggle ? 'hidden gap-12 sm:flex sm:gap-7 items-center' : "flex z-50 rounded-xl text-white font-bold w-3/4 m-auto bg-blue-900 absolute text-center pt-11 mt-24 top-0 flex-col gap-8 h-2/4 mb-24"}>
                    <li><Link>Features</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>Resources</Link></li>
                    <button className="border-none sm:hidden transition ease-in-out delay-150 hover:font-medium border-2 w-3/4 rounded-xl ml-10">Login</button>
                <button className="border-none sm:hidden hover:bg-cyan-300  transition ease-in-out delay-150 bg-sky-500/50  w-3/4 ml-10 p-1 rounded-xl text-white font-bold ">Signup</button>
                </ul>
            
            </div>
            <div className="hidden sm:flex sm:gap-2 gap-8">
                <button className="border-none transition ease-in-out delay-150 hover:font-medium border-2 w-20 rounded-xl bg-slate-50">Login</button>
                <button className="border-none hover:bg-cyan-300  transition ease-in-out delay-150 bg-sky-500/50  w-24 p-1 rounded-xl text-white font-bold ">Signup</button>
            </div>
            <button onClick={()=>{settoggle(!toggle)}} className="sm:hidden lg:hidden md:hidden">=</button>
        </div>
      );
}

export default HomeNav;