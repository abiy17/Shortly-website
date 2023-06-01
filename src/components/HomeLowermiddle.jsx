import Br from "../assets/brand-recognition.svg"
import DR from "../assets/detailed-records.svg"
import FC from "../assets/fully-customizable.svg"
function HomeLowermiddle() {
    return (
        <div className=" w-full sm:w-full h-[90em] lg:h-[55em]  bg-slate-100">
            <div className="pt-20 text-center sm:w-1/4 sm:m-auto sm:flex sm:flex-col sm:gap-3">
                <h1 id="lowerMiddle-h1" className="font-bold  ">Advanced Statistics</h1>
                <p className="mt-5 text-slate-400">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div id="flex-div" className="flex gap-24 w-full flex-col sm:flex-col sm:w-4/5 sm:mt-20 sm:m-auto sm:gap-10 md:flex-col lg:flex-row">
                <div className="w-[17em] mt-16 sm:mt-4 m-auto sm:w-4/5">
                    <li><img src={Br} alt="" /></li>
                    <h3 className="font-bold">Brand Recognition</h3>
                    <p className="">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="w-[17em] lg:mt-24 m-auto sm:mt-10 sm:w-4/5">
                    <li><img src={DR} alt="" /></li>
                    <h3 className="font-bold">Detailed Records</h3>
                    <p className="">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className="w-[17em] lg:mt-36  m-auto sm:mt-16 sm:w-4/5">
                    <li><img src={FC} alt="" /></li>
                    <h3 className="font-bold">Fully Customizable</h3>
                    <p className="">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
      );
}

export default HomeLowermiddle;


  